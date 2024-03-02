import jwt from 'jsonwebtoken';
import dbConnect from "@/db/utils/dbConnect";
import Property from "@/db/model/Property";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";
import loggingMiddleware from "./logMiddleware";


const malkahanaEntryHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const { mrNo, propertyId } = req.query;

    // if (!method) method = "GET";

    // Authenticate the request
    const token = req.cookies.token;
    if (!token) {
      return res.status(409).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { userId } = decoded;
      switch (method) {
        case "POST":
          const malKhanaEntry = await MalkhanaEntry.findOne({ mrNo });

          if (!malKhanaEntry) {
            // Handle the case where MalkhanaEntry with the given mr_no is not found
            return res.status(404).json({
              ok: false,
              message: "MalkhanaEntry not found for the given mr_no.",
            });
          }
          const newProperty = await Property.create(req.body);
          malKhanaEntry.properties.push(newProperty);
          await malKhanaEntry.save();
          res.status(201).json({
            ok: true,
            message: `MalkhanaEntry ${method}`,
            case: newProperty,
          });
          break;
        case "GET":
          const _case = await Property.findById(propertyId);
          res.status(200).json({
            ok: true,
            message: `Property ${method}`,
            _case,
          });
          break;
        case "PUT":
          const updateCase = await Property.findById(propertyId).clone();
          if (updateCase) {
            Object.keys(req.body).forEach((key) => {
              if (key === "chain_of_custody" && Array.isArray(req.body[key])) {
                // If 'chain_of_custody' key exists and is an array, push objects to the array
                updateCase[key] = updateCase[key].concat(req.body[key]);
              } else {
                // For other keys, update as usual
                updateCase[key] = req.body[key];
              }
            });

            await updateCase.save();
            res.status(200).json({
              ok: true,
              message: `Property ${method}`,
              case: updateCase,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `MalkhanaEntry ${method} failed. MalkhanaEntry not found`,
            });
          }
          break;
        case "DELETE":
          const deletedCase = await MalkhanaEntry.findByIdAndDelete(
            propertyId
          ).clone();
          if (deletedCase) {
            res.status(200).json({
              ok: true,
              message: `MalkhanaEntry ${method}`,
              case: deletedCase,
            });
          } else {
            res.status(404).json({
              ok: false,
              message: `MalkhanaEntry ${method} failed. MalkhanaEntry not found`,
            });
          }
          break;
        default:
          res.status(400).json({
            ok: false,
            message: `MalkhanaEntry ${method} failed. Invalid method`,
          });
          break;
      }
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: `failed. ${error.message}`,
    });
  }
};

export default malkahanaEntryHandler;
