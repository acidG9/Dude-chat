import express from "express"
import { login, logout, profile, signup } from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/protect.middleware.js";

const router= express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.put("/profile", protectRoute, profile);

export default router;