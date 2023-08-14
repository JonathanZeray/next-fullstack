import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
    username: {
      type: String,
      unique: [true, "Username already exists!"],
      required: [true, "Username is required!"],
      // match: [
      //   /^[a-zA-Z0-9]{8,30}$/,
      //   "Username invalid, it should contain 8-30 alphanumeric letters and be unique!",
      // ]  
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
