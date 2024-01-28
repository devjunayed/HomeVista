import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
  userName: String,
  email: String,
});

const User = mongoose.models.user || mongoose.model("user", userScheme);
export default User;
