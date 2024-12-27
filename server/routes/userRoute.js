import { registerUser, loginUser, userCredits } from '../controllers/userController.js';
import express from 'express';
import dotenv from 'dotenv';
import userAuth from '../middlewares/auth.js';

dotenv.config(); // Load environment variables

const userRouter = express.Router();

// Route to register a user
userRouter.post('/register', registerUser);

// Route to log in a user
userRouter.post('/login', loginUser);

// Route to credits of  a user
userRouter.post('/credits',userAuth, userCredits)
export default userRouter;

//http://localhost:4000/api/user/login
//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/credits