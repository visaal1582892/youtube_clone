import express from "express";
import upload from "../Middlewares/fileHandler.js";
import { registerUser,loginUser } from '../Controller/users.controller.js';
import { validateRegister,validateLogin } from "../Validator/users.validator.js";

// Creating Route object
const router = express.Router();

// Defining Routes
// 1. Route to register a user
router.post('/register', upload.single('avatar'), validateRegister, registerUser);

// 2. Route to login a user
router.post('/login', validateLogin, loginUser);

export default router;