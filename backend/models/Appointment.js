import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
      match: [/^[6-9]\d{9,14}$/, 'Phone number must start with 6-9 and contain only 10-15 digits'],
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      enum: [
        'ENT Consultation',
        'Vertigo Treatment',
        'Allergy Clinic',
        'Oral Immunotherapy',
        'Snoring Treatment',
        'General Check-up',
      ],
    },
    date: {
      type: Date,
      required: [true, 'Please select a date'],
    },
    time: {
      type: String,
      required: [true, 'Please select a time slot'],
      match: [/^(10|11|02|03):\d{2}\s(AM|PM)$/, 'Invalid time format'],
    },
    notes: {
      type: String,
      maxlength: [500, 'Notes cannot exceed 500 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index to ensure unique date-time-service combination
appointmentSchema.index({ date: 1, time: 1 }, { unique: true });

// Validate appointment date is within 6 months from today
appointmentSchema.pre('validate', function (next) {
  if (this.date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 6);
    const appointmentDate = new Date(this.date);
    appointmentDate.setHours(0, 0, 0, 0);

    if (appointmentDate < today) {
      next(new Error('Cannot book appointments for past dates'));
    } else if (appointmentDate > maxDate) {
      next(new Error('Cannot book appointments beyond 6 months in advance'));
    } else {
      next();
    }
  } else {
    next();
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
