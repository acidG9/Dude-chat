import express from "express"
import { loginController, registerController } from "../Controller/userController.js"

const Router= express.Router();

Router.post("/login", loginController);
Router.post("/register", registerController);

export default Router;