import express from 'express';
import Vibe from '../models/Vibe.js';
import vibe_add from '../middleware/auth.js';
const router = express.Router();

router.post('/', vibe_add, async (req, res) => {




  const vibe = await Vibe.create({ ...req.body, user: req.user._id });
  res.status(201).json(vibe);
});


router.get('/my-vibes',vibe_add,async(req,res)=>{
  try{
    const myVibes=await Vibe.find({user:req.user._id}).select('vibeText');
    res.status(201).json({
      username:req.user.username,
      Total_Vibe_Texts:myVibes.length,
      vibeTexts:myVibes.map(v=>v.vibeText)
  })
  }catch(e){
    res.status(500).json({message:"Server Error"})
  }
})


router.get('/', async (req, res) => {
  const vibes = await Vibe.find().populate('user', 'username');
  res.status(200).json(vibes);
});
export default router;
