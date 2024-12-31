import express  from 'express';
const router = express.Router();
import {signup,login,logout,verifyEmail,forgotPassword} from "../controller/auth.controller.js";

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.post("/verify-email", verifyEmail);


router.post("/forgot-password", forgotPassword);

export default router;
