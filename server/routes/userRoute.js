import { registerUser, loginUser } from '../controllers/userController.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const userRouter = express.Router();

// Route to register a user
userRouter.post('/register', registerUser);

// Route to log in a user
userRouter.post('/login', loginUser);

export default userRouter;
