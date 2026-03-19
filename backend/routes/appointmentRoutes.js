import express from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAvailableSlots,
  getAppointmentById,
  updateAppointmentStatus,
  cancelAppointment,
  getAppointmentStats,
} from '../controllers/appointmentController.js';
import {
  validateAppointment,
  handleValidationErrors,
} from '../middleware/validation.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

// Public routes
router.post(
  '/',
  validateAppointment,
  handleValidationErrors,
  createAppointment
);

router.get('/available-slots', getAvailableSlots);

// Admin routes (protected)
router.get('/stats', adminAuth, getAppointmentStats);
router.get('/', adminAuth, getAllAppointments);
router.get('/:id', adminAuth, getAppointmentById);
router.patch('/:id/status', adminAuth, updateAppointmentStatus);
router.delete('/:id/cancel', adminAuth, cancelAppointment);

export default router;
