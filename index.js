import express from 'express';
import userRoutes  from "./routes/userRouter.js";
import postRoutes from './routes/postRouter.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);




app.listen(8800, () => {
    console.log("connected");
})