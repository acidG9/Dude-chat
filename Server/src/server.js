import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import { dbConnect } from "./library/db.lib.js"
import cookieParser from "cookie-parser"

const app= express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server is listening...")
    dbConnect();
});