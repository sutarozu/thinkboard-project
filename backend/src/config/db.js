import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(['1.1.1.1', '1.0.0.1']);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MONGODB CONNECTED SUCCESFULLY');
  } catch (error) {
    console.error('Error connecting to MONGODB', error);
    process.exit(1);
  }
};
