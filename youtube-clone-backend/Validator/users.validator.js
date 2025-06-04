import User from '../Model/users.model.js';

// Function To validate user registration
export const validateRegister = (req,res,next) => {
    const {username,email,password}=req.body;
    const avatar = req.file ? req.file.path : null;

    // Checking if all fields are give or not
    if(!(username && email && password)){
        return res.status(400).json({message: "Please Provide all the required details"});
    }

    // Validating username
    if(!/^[a-zA-Z\s]+$/.test(username)){
        return res.status(400).json({message: "Username must only contain letters and spaces"});
    }

    // Validating email
    if(!/^[^\s@]+@[^\s@\.]+\.[^\s@\.]+$/.test(email)){
        return res.status(400).json({message: "Enter valid email"});
    }

    // Validating password
    if(password.length<6){
        return res.status(400).json({message: "Password must have atleast 6 characters"});
    }
    if(password.length>25){
        return res.status(400).json({message: "Password cannot have more than 25 characters"});
    }

    // Validating avatar
    if(req.file && !/^image/.test(req.file.mimetype)){
        return res.status(400).json({message: "Avatar must be an image"});
    }

    if (avatar && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(avatar)) {
        return res.status(400).json({
            message: "Enter valid cloudinary url for avatar"
        });
    }

    // Checking if user already exists
    User.findOne({email: email})
        .then(user => {
            if(user) {
                return res.status(400).json({message: "User with this email already exists"});
            }
        })
        .catch(err => {
            console.error("Error checking user existence:", err);
            return res.status(500).json({message: "Internal Server Error"});
        });

    console.log("Registration details validated successfully");

    // Moving to next middleware or handler
    next();
}

// Function to validate user login
export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    // Checking if all fields are given or not
    if (!(email && password)) {
        return res.status(400).json({ message: "Please Provide all the required details" });
    }

    // Validating email
    if (!/^[^\s@]+@[^\s@\.]+\.[^\s@\.]+$/.test(email)) {
        return res.status(400).json({ message: "Enter valid email" });
    }

    // Validating password
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must have at least 6 characters" });
    }
    if (password.length > 25) {
        return res.status(400).json({ message: "Password cannot have more than 25 characters" });
    }

    // Checking if user exists
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: "User with this email is not Yet Registered Please Register" });
            }
        })
        .catch(err => {
            console.error("Error checking user existence:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        });

    console.log("Login details validated successfully");

    // Moving to next middleware or handler
    next();
}