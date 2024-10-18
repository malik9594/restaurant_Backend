import express from 'express';
import { addPosts } from '../controllers/postController.js';


const router = express.Router();

router.get('/test3',addPosts);

export default router;