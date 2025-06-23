import mongoose from "mongoose";
import env from 'dotenv'
env.config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB