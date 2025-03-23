import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { dbConnect } from "./library/db.lib.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server } from "./library/socket.lib.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve();
const PORT= process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, ()=>{
    console.log("Server is listening...")
    dbConnect();
});