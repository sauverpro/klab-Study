import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  email: { type: String, required: true,unique:true },
  fullName: String,
  password: { type: String, required: true },
  telephone: String,
  location: String,
});
export const userModel = mongoose.model("users", userSchema);
