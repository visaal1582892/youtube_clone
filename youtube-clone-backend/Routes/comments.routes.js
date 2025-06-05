import express from 'express';
import { addComment, updateComment, deleteComment } from '../Controller/comments.controller.js';
import { validateAddComment,validateUpdateComment } from '../Validator/comments.validator.js';
import protectRoute from '../Middleware/protectRoute.js';

const router = express.Router();

// Routes to handle comments
// 1. Route to add a comment
router.post('/addComment', protectRoute, validateAddComment, addComment);

// 2. Route to update a Comment
router.put('/updateComment/:id', protectRoute, validateUpdateComment, updateComment);

// 3. Route to delete a comment
router.delete('/deleteComment/:id', protectRoute, deleteComment);

export default router;