import mongoose from "mongoose"

export const dbConnect= async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database fail to connect:", error)
    }
};