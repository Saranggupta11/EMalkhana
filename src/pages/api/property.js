import dbConnect from "@/db/utils/dbConnect";
import Property from "@/db/model/Property";
import MalkhanaEntry from "@/db/model/MalkhanaEntry";

export default async function malkahanaEntryHandler(req, res) {
    try {
        await dbConnect();
    
        const { method } = req || "GET";
        const { mrNo,propertyId } = req.query;
    
        // if (!method) method = "GET";
    
        switch (method) {
        case "POST":
            const malKhanaEntry=await MalkhanaEntry.findOne({mr_no:mrNo})
            
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
            const _case = await Property.findById(propertyId)
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
                updateCase[key] = req.body[key];
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
            const deletedCase = await MalkhanaEntry.findByIdAndDelete(propertyId).clone();
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
        res.status(500).json({
        ok: false,
        message: `failed. ${error.message}`,
        });
    }
}