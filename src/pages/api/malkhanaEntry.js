import dbConnect from "@/db/utils/dbConnect";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";
import Property from "@/db/model/Property";

export default async function malkahanaEntryHandler(req, res) {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const { mrNo } = req.query;

    // if (!method) method = "GET";

    switch (method) {
      case "POST":
        const newCase = await MalkhanaEntry.create(req.body);
        res.status(201).json({
          ok: true,
          message: `MalkhanaEntry ${method}`,
          case: newCase,
        });
        break;

      case "GET":
        if (!mrNo) {
          const _cases = await MalkhanaEntry.find();
          res.status(200).json({
            ok: true,
            message: `MalkhanaEntry ${method}`,
            _cases,
          });
        }
        const _case = await MalkhanaEntry.findOne({ mrNo })
          .populate({ path: "properties" , model: Property})
          .exec();
        res.status(200).json({
          ok: true,
          message: `MalkhanaEntry ${method}`,
          _case,
        });
        break;

      case "PUT":
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
          });
        } else {
          res.status(404).json({
            ok: false,
            message: `MalkhanaEntry ${method} failed. MalkhanaEntry not found`,
          });
        }
        break;
      case "DELETE":
        const deletedCase = await MalkhanaEntry.findOneAndDelete({
          mrNo,
        }).clone();
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
    console.log(error);
    res.status(500).json({
      ok: false,
      message: `failed. ${error.message}`,
    });
  }
}
