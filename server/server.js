import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import imageRouter from './routes/imageRoute.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());
await connectDB();



app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => res.send("API Working fine."));

app.listen(PORT, () => console.log("Server running on port: " + PORT));
