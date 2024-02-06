import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/model/User";
import loggingMiddleware from "./logMiddleware";

const userHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const { userId } = req.query;

    console.log(userId)

    // if (!method) method = "GET";

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
        const user = await User.findOne({ userId }).clone();
        res.status(200).json({
          ok: true,
          message: `User ${method}`,
          user,
        });
        break;

      case "PUT":
        const updateUser = await User.findOne({ userId}).clone();
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
            const deletedUser = await User.findOneAndDelete({ userId }).clone();
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
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: `${err}`,
    });
  }
};

export default loggingMiddleware(userHandler);
