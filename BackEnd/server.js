import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js"

const app=express();
dotenv.config();
app.use(express.json());

const connectDb= async () => {
    try {
        const connect= await mongoose.connect(process.env.db_URL);
        console.log("Server is connected to database");
    } catch (error) {
        console.log("Server is not able to connect to database", error.message);
    }
};
connectDb();

app.get("/", (req, res)=>{
    res.send("Server is sending...")
})
app.use("/user", userRoutes);

const PORT= process.env.PORT;

app.listen(PORT, console.log("Server is listening..."))