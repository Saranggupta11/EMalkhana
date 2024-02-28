import dbConnect from "@/db/utils/dbConnect";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";
import jwt from 'jsonwebtoken';

const malkahanaEntrySearchHandler = async (req, res) => {
  try {
    await dbConnect();

    const { method } = req || "GET";
    const { mrNo, firNo, dateOfFir, dateOfSeizure, psName, date, state, district } = req.body;

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

          if (mrNo) searchCriteria.mrNo = { $regex: new RegExp(mrNo, 'i') };
          if (firNo) searchCriteria.firNo = { $regex: new RegExp(firNo, 'i') };
          if (dateOfFir) searchCriteria.dateOfFir = dateOfFir;
          if (dateOfSeizure) searchCriteria.dateOfSeizure = dateOfSeizure;
          if (psName) searchCriteria.psName = { $regex: new RegExp(psName, 'i') };
          if (date) searchCriteria.date = date;
          if (state) searchCriteria.state = { $regex: new RegExp(state, 'i') };
          if (district) searchCriteria.district = { $regex: new RegExp(district, 'i') };

          const entries = await MalkhanaEntry.find(searchCriteria);
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

export default malkahanaEntrySearchHandler;
