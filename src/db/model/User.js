import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID required"],
      unique: true,
    },
    name:{
      type: String,
      required: [true, "Name required"],
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    psName:{
      type: String,
      required: [true, "Police Station Name required"],
    },
    role: {
      type: String,
      enum: ["IO", "SP", "DSP"],
      default: "IO", // You can set a default role if needed
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    throw err;
  }
});

UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw err;
  }
};
export default models.User || model("User", UserSchema);
