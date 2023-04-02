import express from "express";
import { registerUser, loginUser, logoutUser, userProfile } from "../controllers/users.js";
import { isAuthentic } from "../middlewares/authenticate.js";

const router = express.Router();

router.post('/new', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/profile', isAuthentic, userProfile);

export default router;