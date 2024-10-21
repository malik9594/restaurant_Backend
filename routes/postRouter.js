import express from 'express';
import { addPosts, deletePosts, getPost, getPosts, updatePosts } from '../controllers/postController.js';


const router = express.Router();

router.get("/", getPosts);
router.get("/:id",getPost)
router.post("/",addPosts)
router.delete("/:id", deletePosts)
router.put("/:id", updatePosts)

export default router;