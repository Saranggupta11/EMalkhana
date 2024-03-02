import dbConnect from "@/db/utils/dbConnect";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";
import jwt from 'jsonwebtoken';

const malkahanaEntryRangeSearchHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const {dateOfFirFrom, dateOfFirTo, dateOfSeizureFrom, dateOfSeizureTo,dateFrom, dateTo,psName, district } = req.query;
    console.log(req.query)
    // Authenticate the request
    const token = req.cookies.token;
    if (!token) {
      return res.status(409).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { userId } = decoded;

      switch (method) {
        case "GET":
          const searchCriteria = {};
          if (dateOfFirFrom && dateOfFirTo) searchCriteria.dateOfFir = { $gte: new Date(dateOfFirFrom), $lte: new Date(dateOfFirTo) };
          if (dateOfSeizureFrom && dateOfSeizureTo) searchCriteria.dateOfSeizure = { $gte: new Date(dateOfSeizureFrom), $lte: new Date(dateOfSeizureTo) };
          if (psName) searchCriteria.psName = { $regex: new RegExp(psName, 'i') }; // Case-insensitive search
          if (dateFrom && dateTo) searchCriteria.date = { $gte: new Date(dateFrom), $lte: new Date(dateTo) };
          if (district) searchCriteria.district = { $regex: new RegExp(district, 'i') }; // Case-insensitive search
          console.log(searchCriteria)
          const entries = await MalkhanaEntry.find(searchCriteria);
          console.log(entries)
          res.status(200).json({ entries });
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

export default malkahanaEntryRangeSearchHandler;
