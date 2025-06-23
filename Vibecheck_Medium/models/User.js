import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next;
  this.password=await bcrypt.hash(this.password,12)
  next();
})

userSchema.methods.matchPassword=function(newPassword){
  return bcrypt.compare(newPassword,this.password)
}

const User = mongoose.model('User', userSchema);
export default User;