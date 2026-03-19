import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { errorHandler } from './middleware/validation.js';

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
      : [
          'http://localhost:5173',
          'http://localhost:8080',
          'http://localhost:3000',
          'http://127.0.0.1:5173',
          'http://127.0.0.1:8080',
          'http://127.0.0.1:3000',
          'https://dr-prashant.vercel.app',
          'https://drprashantent.com',
          'https://api.drprashantent.com',
        ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
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
   ✅ SMTP Host: ${process.env.SMTP_HOST || 'Not set'}
   ✅ SMTP Port: ${process.env.SMTP_PORT || 'Not set'}
   ✅ SMTP User: ${process.env.SMTP_USER ? process.env.SMTP_USER.substring(0, 5) + '****' : 'Not set'}
   ✅ From Email: ${process.env.FROM_EMAIL || 'Not set'}
   ✅ Admin Email: ${process.env.ADMIN_EMAIL || 'Not set'}

🌐 CORS CONFIGURATION:
   ✅ Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:8080'}

╔══════════════════════════════════════════════════════════════════════════════╗
║              Server is ready! Waiting for appointments... 🚀                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

export default app;
