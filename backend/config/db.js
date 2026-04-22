import mongoose from "mongoose";
import dotenv from "dotenv/config";
const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection has been established successfully.");       
    } catch (error) {
        console.log("DB connection Error");  
    }
}
export default dbConnect;