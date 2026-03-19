import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import { errorHandler } from './middleware/validation.js';
import { verifySmtpConnection } from './utils/emailService.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet()); // Security headers
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(',').map(url => url.trim())
      : [];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (for development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// SMTP Test endpoint
app.get('/api/test-smtp', async (req, res) => {
  try {
    const isConnected = await verifySmtpConnection(2);
    res.status(isConnected ? 200 : 500).json({
      success: isConnected,
      message: isConnected ? 'SMTP connection successful' : 'SMTP connection failed',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'SMTP test failed',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║          🏥 Dr. Prashant's Appointment Booking Backend Started 🏥            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

📋 SERVER CONFIGURATION:
   ✅ Port: ${PORT}
   ✅ Environment: ${process.env.NODE_ENV || 'development'}
   ✅ Node Version: ${process.version}

🗄️  DATABASE:
   ✅ MongoDB URI: ${process.env.MONGODB_URI ? '✓ Configured' : '❌ Not configured'}

📧 EMAIL SERVICE:
   ✅ Service: Gmail
   ✅ SMTP User: ${process.env.SMTP_USER ? process.env.SMTP_USER.substring(0, 5) + '****' : 'Not set'}
   ✅ From Email: ${process.env.FROM_EMAIL || 'Not set'}
   ✅ Admin Email: ${process.env.ADMIN_EMAIL || 'Not set'}

🌐 CORS CONFIGURATION:
   ✅ Frontend URL: ${process.env.FRONTEND_URL || 'Not configured'}

╔══════════════════════════════════════════════════════════════════════════════╗
║              Server is ready! Waiting for appointments... 🚀                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
  `);

  // Verify SMTP connection in the background (non-blocking)
  verifySmtpConnection().catch(err => {
    console.error('Background SMTP check error:', err.message);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

export default app;
