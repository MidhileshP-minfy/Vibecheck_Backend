import express from "express"
import env from 'dotenv'
//import jsonwebtoken from "jsonwebtoken"

import connectDB from "./config/db.js";
import authRoutes from './routes/login-signup.js';
import vibeRoutes from './routes/vibes.js';

env.config();
const app=express()

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send("🎧 Welcome to VibeCheck API!");
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/vibes', vibeRoutes);


// app.get('/test',(req, res) => {
//     console.log("Test endpoint called")
//     const email = "samrathreddy@gmail.com"
//     const password = "Test@123"
//     const secretKey = process.env.key
//     console.log(secretKey)
//     const bearer = jsonwebtoken.sign(email,process.env.JWT_SECRET)
//     console.log(bearer)
//     res.send(bearer)
// })

const port =process.env.port||3000;
app.listen(port,()=>{
    console.log(`🚀 Server blasting off on port ${port}`);    
})