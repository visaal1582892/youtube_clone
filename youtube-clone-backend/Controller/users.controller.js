import bcrypt from 'bcrypt';
import User from '../Model/users.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Function to implement registration
export const registerUser = async (req,res) => {
    const saltRounds=10;
    const {username, email} = req.body;

    // Hashing the password
    const hashedPassword=await bcrypt.hash(req.body.password, saltRounds);

    // Getting the avatar path from the uploaded file
    const avatar=req.file?req.file.path:process.env.DEFAULT_AVATAR_URL;
    try{
        const newUser=await User.create({
            username: username,
            email: email,
            password: hashedPassword,
            avatar: avatar
        });

        return res.status(201).json({
            message: "User Registered Successfully"
        });
    }
    catch(error){
        return res.status(500).json({message: "Error in registering user", error: error.message});
    }

}

// Function To Impement User Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Finding user by email
        const user = await User.findOne({ email: email });

        // Comparing password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generating JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Returning response
        return res.status(200).json({ message: "Login successful", token: token });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}