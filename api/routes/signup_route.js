import express from 'express';
import { signup } from '../controller/signup_controller.js';   
const router = express.Router();
router.post('/signup',signup); 
export default router;