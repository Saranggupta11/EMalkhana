import jwt from 'jsonwebtoken';
import dbConnect from "@/db/utils/dbConnect";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";
import Property from "@/db/model/Property";
import loggingMiddleware from "./logMiddleware";

const malkahanaEntryHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const { mrNo } = req.query;

    // Authenticate the request
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { userId } = decoded;

      switch (method) {
        case "POST":
          // Your POST logic for MalkhanaEntry
          const newCase = await MalkhanaEntry.create(req.body);
          res.status(201).json({
            ok: true,
            message: `MalkhanaEntry ${method}`,
            case: newCase,
            user: session.user,
          });
          break;

        case "GET":
          console.log(decoded)
          // Your GET logic for MalkhanaEntry
          if (!mrNo) {
            const _cases = await MalkhanaEntry.find();
            res.status(200).json({
              ok: true,
              message: `MalkhanaEntry ${method}`,
              _cases,
              user: session.user,
            });
          }
          const _case = await MalkhanaEntry.findOne({ mrNo })
            .populate({ path: "properties", model: Property })
            .exec();
          res.status(200).json({
            ok: true,
            message: `MalkhanaEntry ${method}`,
            _case,
          });
          break;

        case "PUT":
          // Your PUT logic for MalkhanaEntry
          const updateCase = await MalkhanaEntry.findOne({ mrNo }).clone();
          if (updateCase) {
            Object.keys(req.body).forEach((key) => {
              updateCase[key] = req.body[key];
            });
            await updateCase.save();
            res.status(200).json({
              ok: true,
              message: `MalkhanaEntry ${method}`,
              case: updateCase,
              user: session.user,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `MalkhanaEntry ${method} failed. MalkhanaEntry not found`,
            });
          }
          break;

        case "DELETE":
          // Your DELETE logic for MalkhanaEntry
          const deletedCase = await MalkhanaEntry.findOneAndDelete({
            mrNo,
          }).clone();
          if (deletedCase) {
            res.status(200).json({
              ok: true,
              message: `MalkhanaEntry ${method}`,
              case: deletedCase,
              user: session.user,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `MalkhanaEntry ${method} failed. MalkhanaEntry not found`,
              user: session.user,
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
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: `Failed. ${error.message}` });
  }
};

export default malkahanaEntryHandler;
