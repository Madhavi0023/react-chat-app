import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to mongoDB database using mongoose");
};

export default connectDB;
