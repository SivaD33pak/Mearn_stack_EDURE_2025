import mongoose from "mongoose"
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(
        'mongodb+srv://abhishekjp_db_user:abhishekjp_db_user@cluster0.gnpip85.mongodb.net/?appName=Cluster0'
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;