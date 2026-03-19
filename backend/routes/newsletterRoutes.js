import express from 'express';
import {
  subscribeToNewsletter,
  getAllSubscribers,
  getSubscriberById,
  unsubscribeFromNewsletter,
  deleteSubscriber,
  getNewsletterStats,
  checkSubscription,
} from '../controllers/newsletterController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

// Public routes
router.post('/subscribe', subscribeToNewsletter);
router.get('/check', checkSubscription);
router.patch('/unsubscribe/:id', unsubscribeFromNewsletter);

// Admin routes (protected)
router.get('/stats', adminAuth, getNewsletterStats);
router.get('/', adminAuth, getAllSubscribers);
router.get('/:id', adminAuth, getSubscriberById);
router.delete('/:id', adminAuth, deleteSubscriber);

export default router;
