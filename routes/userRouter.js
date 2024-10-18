import express from 'express';
import { adduser } from '../controllers/userController.js';

const router = express.Router();

router.get('/test1', adduser);

export default router;