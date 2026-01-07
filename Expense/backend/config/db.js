import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sivadeepak:9020304370@cluster0.qlrclhe.mongodb.net/?appName=Cluster0"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
