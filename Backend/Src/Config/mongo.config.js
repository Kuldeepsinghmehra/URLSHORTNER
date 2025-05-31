
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

 const connectDB = async () => {
  try {
     await mongoose.connect(MONGO_URI, {
      dbName:'urlShort'
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);

  }
};
export default connectDB