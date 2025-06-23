import jwt from "jsonwebtoken"
import User from "../models/User.js"

const vibe_add=async (require,resolve,next)=>{
    const token=require.headers.authorization?.split(' ')[1];
    if (!token) return resolve.status(401).json({message:"Unauthorized"});

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        
        require.user=await User.findById(decoded.id).select("email");

        next();
    } catch{
        resolve.status(401).json({message:"Invalid Token"})
    }
}
export default vibe_add;