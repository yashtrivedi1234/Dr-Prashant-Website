import Newsletter from '../models/Newsletter.js';
import { sendNewsletterWelcomeEmail } from '../utils/emailService.js';

// Subscribe to newsletter
export const subscribeToNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    // Check if email already exists and is active
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase() });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: 'You are already subscribed to our newsletter',
        });
      } else {
        // Re-activate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.unsubscribedAt = null;
        await existingSubscriber.save();

        try {
          await sendNewsletterWelcomeEmail({ email: existingSubscriber.email });
        } catch (emailError) {
          console.error('Welcome email failed:', emailError);
        }

        return res.status(200).json({
          success: true,
          message: 'Welcome back! You have been re-subscribed to our newsletter.',
          subscriber: existingSubscriber,
        });
      }
    }

    // Create new subscriber
    const newSubscriber = new Newsletter({
      email: email.toLowerCase(),
    });

    await newSubscriber.save();

    // Send welcome email (non-blocking)
    try {
      await sendNewsletterWelcomeEmail({ email: newSubscriber.email });
    } catch (emailError) {
      console.error('Welcome email failed:', emailError);
      // Don't fail subscription if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing! Check your email for confirmation.',
      subscriber: newSubscriber,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This email is already subscribed',
      });
    }
    next(error);
  }
};

// Get all newsletter subscribers (Admin)
export const getAllSubscribers = async (req, res, next) => {
  try {
    const { isActive } = req.query;

    let filter = {};
    if (isActive !== undefined) {
      filter.isActive = isActive === 'true';
    }

    const subscribers = await Newsletter.find(filter).sort({ subscribedAt: -1 }).select('-__v');

    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers,
    });
  } catch (error) {
    next(error);
  }
};

// Get single subscriber by ID (Admin)
export const getSubscriberById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const subscriber = await Newsletter.findById(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found',
      });
    }

    res.status(200).json({
      success: true,
      subscriber,
    });
  } catch (error) {
    next(error);
  }
};

// Unsubscribe from newsletter
export const unsubscribeFromNewsletter = async (req, res, next) => {
  try {
    const { id } = req.params;

    const subscriber = await Newsletter.findByIdAndUpdate(
      id,
      {
        isActive: false,
        unsubscribedAt: new Date(),
      },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'You have been unsubscribed from our newsletter',
      subscriber,
    });
  } catch (error) {
    next(error);
  }
};

// Delete subscriber (Admin)
export const deleteSubscriber = async (req, res, next) => {
  try {
    const { id } = req.params;

    const subscriber = await Newsletter.findByIdAndDelete(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Subscriber deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Get newsletter statistics (Admin)
export const getNewsletterStats = async (req, res, next) => {
  try {
    const totalSubscribers = await Newsletter.countDocuments();
    const activeSubscribers = await Newsletter.countDocuments({ isActive: true });
    const inactiveSubscribers = await Newsletter.countDocuments({ isActive: false });

    res.status(200).json({
      success: true,
      stats: {
        totalSubscribers,
        activeSubscribers,
        inactiveSubscribers,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Check if email is subscribed
export const checkSubscription = async (req, res, next) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    const subscriber = await Newsletter.findOne({
      email: email.toLowerCase(),
    });

    if (!subscriber) {
      return res.status(200).json({
        success: true,
        isSubscribed: false,
      });
    }

    res.status(200).json({
      success: true,
      isSubscribed: subscriber.isActive,
      subscribedAt: subscriber.subscribedAt,
    });
  } catch (error) {
    next(error);
  }
};
