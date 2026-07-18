import { body, validationResult } from 'express-validator';

// Allowed services list
const ALLOWED_SERVICES = [
  'ENT Consultation',
  'Vertigo Treatment',
  'Allergy Clinic',
  'Oral Immunotherapy',
  'Snoring Treatment',
  'General Check-up',
];

const ALLOWED_CONTACT_SUBJECTS = [...ALLOWED_SERVICES, 'Other'];

// Valid time slots
const VALID_TIME_SLOTS = [
  '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM',
  '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
  '02:00 PM', '02:15 PM', '02:30 PM', '02:45 PM',
  '03:00 PM', '03:15 PM', '03:30 PM', '03:45 PM',
];

// Validation rules
export const validateAppointment = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[6-9]\d{9,14}$/)
    .withMessage('Phone number must start with 6-9 and contain only 10-15 digits'),
  
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Service is required')
    .isIn(ALLOWED_SERVICES)
    .withMessage(`Service must be one of: ${ALLOWED_SERVICES.join(', ')}`),
  
  body('date')
    .notEmpty()
    .withMessage('Appointment date is required')
    .isISO8601()
    .withMessage('Please provide a valid date format (YYYY-MM-DD)')
    .custom((value) => {
      const selectedDate = new Date(value);
      const today = new Date();
      
      // Set both to midnight for fair comparison
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        throw new Error('Appointment date must be today or in the future');
      }
      
      // Optional: Limit bookings to next 6 months
      const maxDate = new Date(today);
      maxDate.setMonth(maxDate.getMonth() + 6);
      if (selectedDate > maxDate) {
        throw new Error('Appointments can only be booked up to 6 months in advance');
      }
      
      return true;
    }),
  
  body('time')
    .trim()
    .notEmpty()
    .withMessage('Time slot is required')
    .isIn(VALID_TIME_SLOTS)
    .withMessage(`Time must be one of the available slots: ${VALID_TIME_SLOTS.join(', ')}`),
  
  body('notes')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 500 })
    .withMessage('Notes cannot exceed 500 characters'),
];

export const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[6-9]\d{9,14}$/)
    .withMessage('Phone number must start with 6-9 and contain only 10-15 digits'),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isIn(ALLOWED_CONTACT_SUBJECTS)
    .withMessage(`Subject must be one of: ${ALLOWED_CONTACT_SUBJECTS.join(', ')}`),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
];

export const validateContactStatus = [
  body('status')
    .trim()
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['new', 'read', 'replied'])
    .withMessage('Status must be one of: new, read, replied'),
];

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.param,
      message: err.msg,
      value: err.value,
    }));

    console.log('❌ Validation Errors:', formattedErrors);
    
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please check your input.',
      errors: formattedErrors,
    });
  }
  
  next();
};

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  // Handle duplicate key error (slot already booked)
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: 'This time slot is already booked. Please choose another date or time.',
      error: 'SLOT_ALREADY_BOOKED',
    });
  }
  
  // Handle validation error from Mongoose
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(error => ({
      field: error.path,
      message: error.message,
    }));
    
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }
  
  // Handle other errors
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An error occurred while processing your request',
    error: process.env.NODE_ENV === 'development' ? err : undefined,
  });
};
