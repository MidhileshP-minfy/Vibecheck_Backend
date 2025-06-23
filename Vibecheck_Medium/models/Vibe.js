import mongoose from "mongoose";
const vibeSchema = new mongoose.Schema({
  vibeText: String,
  mood:String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('Vibe', vibeSchema);
export default User;