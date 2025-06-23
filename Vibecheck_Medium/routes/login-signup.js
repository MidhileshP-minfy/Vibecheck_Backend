import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.status(201).json({token});
});

router.post('/login', async (req, res) => {
  const {email, password } = req.body;
  const user=await User.findOne({email})
if (!user) {
    return res.status(401).json({ message: 'Email does\'nt match' });
  }
  if(!(await user.matchPassword(password))){
    return res.status(401).json({ message: 'Wrong Password' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn:"2hr"});
  res.status(200).json({token});
});

export default router;
