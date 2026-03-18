import Appointment from '../models/Appointment.js';
import {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from '../utils/emailService.js';

// Available time slots
const ALL_TIME_SLOTS = [
  '10:00 AM',
  '10:15 AM',
  '10:30 AM',
  '10:45 AM',
  '11:00 AM',
  '11:15 AM',
  '11:30 AM',
  '11:45 AM',
  '02:00 PM',
  '02:15 PM',
  '02:30 PM',
  '02:45 PM',
  '03:00 PM',
  '03:15 PM',
  '03:30 PM',
  '03:45 PM',
];

// Create new appointment
export const createAppointment = async (req, res, next) => {
  try {
    const { name, email, phone, service, date, time, notes } = req.body;

    // Check if slot is already booked for this date
    const existingAppointment = await Appointment.findOne({
      date: new Date(date),
      time: time,
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: 'Slot already booked. Please choose another time or date.',
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      service,
      date: new Date(date),
      time,
      notes: notes || '',
      status: 'pending',
    });

    // Save appointment to database
    await appointment.save();

    // Send confirmation emails (non-blocking - proceed even if email fails)
    try {
      await Promise.all([
        sendUserConfirmationEmail({
          name,
          email,
          service,
          date,
          time,
        }),
        sendAdminNotificationEmail({
          name,
          email,
          phone,
          service,
          date,
          time,
          notes,
        }),
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the appointment creation if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully. Confirmation email has been sent.',
      appointment: {
        id: appointment._id,
        name: appointment.name,
        email: appointment.email,
        service: appointment.service,
        date: appointment.date,
        time: appointment.time,
        status: appointment.status,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all appointments (Admin)
export const getAllAppointments = async (req, res, next) => {
  try {
    const { status, date, service } = req.query;

    // Build filter object
    let filter = {};

    if (status) {
      filter.status = status;
    }

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      filter.date = {
        $gte: startDate,
        $lte: endDate,
      };
    }

    if (service) {
      filter.service = service;
    }

    const appointments = await Appointment.find(filter)
      .sort({ date: -1, time: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

// Get available slots for a specific date
export const getAvailableSlots = async (req, res, next) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a date',
      });
    }

    // Validate date format
    const selectedDate = new Date(date);
    if (isNaN(selectedDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid date format',
      });
    }

    // Check if date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: 'Cannot book appointments for past dates',
      });
    }

    // Find all booked appointments for this date
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const bookedAppointments = await Appointment.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select('time');

    const bookedTimes = bookedAppointments.map((apt) => apt.time);

    // Get available slots
    const availableSlots = ALL_TIME_SLOTS.filter(
      (slot) => !bookedTimes.includes(slot)
    );

    res.status(200).json({
      success: true,
      date: date,
      totalSlots: ALL_TIME_SLOTS.length,
      bookedSlots: bookedTimes.length,
      availableCount: availableSlots.length,
      availableSlots,
      bookedSlots: bookedTimes,
    });
  } catch (error) {
    next(error);
  }
};

// Get single appointment by ID
export const getAppointmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Update appointment status (Admin)
export const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment status updated successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Cancel appointment
export const cancelAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status: 'cancelled' },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment cancelled successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Get appointments statistics
export const getAppointmentStats = async (req, res, next) => {
  try {
    const totalAppointments = await Appointment.countDocuments();
    const pendingAppointments = await Appointment.countDocuments({ status: 'pending' });
    const confirmedAppointments = await Appointment.countDocuments({ status: 'confirmed' });
    const completedAppointments = await Appointment.countDocuments({ status: 'completed' });
    const cancelledAppointments = await Appointment.countDocuments({ status: 'cancelled' });

    // Get upcoming appointments (next 7 days)
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const upcomingAppointments = await Appointment.countDocuments({
      date: {
        $gte: today,
        $lte: nextWeek,
      },
      status: { $in: ['confirmed', 'pending'] },
    });

    // Get appointments by service
    const appointmentsByService = await Appointment.aggregate([
      {
        $group: {
          _id: '$service',
          count: { $sum: 1 },
        },
      },
    ]);

    // Format service stats
    const appointmentsByServiceObj = {};
    appointmentsByService.forEach((item) => {
      appointmentsByServiceObj[item._id] = item.count;
    });

    // Get appointments by status
    const appointmentsByStatus = await Appointment.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    // Format status stats
    const appointmentsByStatusObj = {};
    appointmentsByStatus.forEach((item) => {
      appointmentsByStatusObj[item._id] = item.count;
    });

    res.status(200).json({
      success: true,
      totalAppointments,
      pendingAppointments,
      confirmedAppointments,
      completedAppointments,
      cancelledAppointments,
      upcomingAppointments,
      appointmentsByService: appointmentsByServiceObj,
      appointmentsByStatus: appointmentsByStatusObj,
    });
  } catch (error) {
    next(error);
  }
};
