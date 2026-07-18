import mongoose from 'mongoose';
import { seedAdmin } from '../utils/seedAdmin.js';

const connectDB = async () => {
  try {
    console.log('\n🔗 Connecting to MongoDB...');
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║         ✅ MongoDB Connected Successfully!                ║
║                                                           ║
║  Host: ${conn.connection.host}
║  Database: ${conn.connection.name}
║  Status: Connected
╚═══════════════════════════════════════════════════════════╝
    `);
    await seedAdmin();
    return conn;
  } catch (error) {
    console.error(`
╔═══════════════════════════════════════════════════════════╗
║         ❌ MongoDB Connection Failed!                     ║
║                                                           ║
║  Error: ${error.message}
╚═══════════════════════════════════════════════════════════╝
    `);
    process.exit(1);
  }
};

export default connectDB;
