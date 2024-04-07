import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Successfully connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Could not connect to the database. Exiting now...", error);
    process.exit(1);
  }
};

export default connectDB;
