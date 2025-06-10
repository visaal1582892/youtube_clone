import express from "express";
import upload from "../Middleware/fileHandler.js";
import { registerUser,loginUser,getUserById } from '../Controller/users.controller.js';
import { validateRegister,validateLogin } from "../Validator/users.validator.js";
import protectRoute from '../Middleware/protectRoute.js';

// Creating Route object
const router = express.Router();

// Defining Routes
// 1. Route to register a user
router.post('/register', upload.single('avatar'), validateRegister, registerUser);

// 2. Route to login a user
router.post('/login', validateLogin, loginUser);

// 3. Route to get user by id
router.get('/:userId', protectRoute, getUserById);

export default router;