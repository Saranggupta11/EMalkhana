import jwt from 'jsonwebtoken';
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/model/User";
import loggingMiddleware from "./logMiddleware";
import bcrypt from "bcrypt";

const loginHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";

    switch (method) {
      case "POST":
        const { userId, password } = req.body;
        const user = await User.findOne({ userId});
        if (!user) {
          return res.status(401).json({ message: 'user not found' });
        }
        else if(!bcrypt.compare(password,user.password)){
          return res.status(401).json({ message: 'invalid password' });
        }
        // Generate JWT token
        const token = jwt.sign({ username: user.userId, email: user.email }, process.env.JWT_SECRET);
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
        res.status(201).json({ message: 'User logged in successfully',token });
        break;

      case "DELETE":
        res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
        res.status(200).json({ message: 'User logged out successfully' });
        break;

      default:
        res.status(400).json({
          ok: false,
          message: `Invalid method ${method}`,
        });
        break;
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: `${err}`,
    });
  }
};

export default loginHandler;
