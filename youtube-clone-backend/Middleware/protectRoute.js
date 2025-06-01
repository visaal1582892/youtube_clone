import jwt from 'jsonwebtoken';
import User from '../Model/users.model.js';

// Middleware Function To protect the route by checking if user is authenticated or not
const protectRoute = (req,res,next) => {
    const authHeader=req.headers['authorization'];
    if(!authHeader) return res.status(401).json({message:'You are not authorized to access this resource Please login first'});

    // Check if the token is in the format "Bearer token
    const token=authHeader.split(' ')[1];
    if(!token) return res.status(401).json({message:'You are not authorized to access this resource Please login first'});

    // Verify the token
    jwt.verify(token,process.env.JWT_SECRET,async(err,user)=>{
        if(err) return res.status(403).json({message:'You are Forbiddern to access this resource'});
        
        // If the token is valid, attach the user to the request object
        const currentUser=await User.findById(user.userId);
        if(!currentUser) return res.status(404).json({message:'User not found'});
        req.user = await currentUser;
        next();
    });
}

export default protectRoute;