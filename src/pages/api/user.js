import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/model/User";
import jwt from "jsonwebtoken";


const userHandler = async (req, res) => {
  try {
    await dbConnect();
    const token = req.cookies.token;
    if (!token) {
      return res.status(409).json({ message: "Unauthorized" });
    }
    const { method } = req || "GET";
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { username } = decoded;
      console.log("method", method);
      switch (method) {
        case "POST":
          const newUser = await User.create(req.body);
          res.status(201).json({
            ok: true,
            message: `User ${method}`,
            user: newUser,
          });
          break;

        case "GET":
          console.log("userId", decoded);
          const user = await User.findOne({ userId: username }).clone();
          res.status(200).json({
            ok: true,
            message: `User ${method}`,
            user,
          });
          break;

        case "PUT":
          const updateUser = await User.findOne({ userId: username }).clone();
          if (updateUser) {
            Object.keys(req.body).forEach((key) => {
              updateUser[key] = req.body[key];
            });
            await updateUser.save();
            res.status(200).json({
              ok: true,
              message: `User ${method}`,
              user: updateUser,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `User ${method} failed. User not found`,
            });
          }
          break;
        case "DELETE":
          const deletedUser = await User.findOneAndDelete({
            userId: username,
          }).clone();
          if (deletedUser) {
            res.status(200).json({
              ok: true,
              message: `User ${method}`,
              user: deletedUser,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `User ${method} failed. User not found`,
            });
          }
          break;

        default:
          res.status(400).json({
            ok: false,
            message: `Invalid method ${method}`,
          });
          break;
      }
    } catch (error) {
      console.log("Error", error);
      res.status(401).json({ message: error });
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: `${err}`,
    });
  }
};

export default userHandler;
