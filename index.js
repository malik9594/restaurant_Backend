import express from 'express';
import userRoutes  from "./routes/userRouter.js";
import postRoutes from './routes/postRouter.js';
import authRoutes from './routes/AuthRouter.js'
import cors from 'cors';

const app = express();

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);




app.listen(3000, () => {
    console.log("connected");
})