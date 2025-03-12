import express from "express"
import { login, logout, profile, signup, check } from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/protect.middleware.js";

const router= express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.put("/profile", protectRoute, profile);
router.get("/check", protectRoute, check)

export default router;