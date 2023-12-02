import dbConnect from "@/db/utils/dbConnect";
import Case from "@/db/model/MalkhanaEntry";

export default async function caseHandler(req, res) {
    try {
        await dbConnect();
    
        const { method } = req || "GET";
        const { caseId } = req.query;
    
        // if (!method) method = "GET";
    
        switch (method) {
        case "POST":
            const newCase = await Case.create(req.body);
            res.status(201).json({
            ok: true,
            message: `Case ${method}`,
            case: newCase,
            });
            break;
    
        case "GET":
            const _case = await Case.findOne({ crime_number: caseId }).clone();
            res.status(200).json({
            ok: true,
            message: `Case ${method}`,
            _case,
            });
            break;
    
        case "PUT":
            const updateCase = await Case.findOne({ caseId }).clone();
            if (updateCase) {
            Object.keys(req.body).forEach((key) => {
                updateCase[key] = req.body[key];
            });
            await updateCase.save();
            res.status(200).json({
                ok: true,
                message: `Case ${method}`,
                case: updateCase,
            });
            } else {
            res.status(404).json({
                ok: false,
                message: `Case ${method} failed. Case not found`,
            });
            }
            break;
        case "DELETE":
            const deletedCase = await Case.findOneAndDelete({ caseId }).clone();
            if (deletedCase) {
            res.status(200).json({
                ok: true,
                message: `Case ${method}`,
                case: deletedCase,
            });
            } else {
            res.status(404).json({
                ok: false,
                message: `Case ${method} failed. Case not found`,
            });
            }
            break;
        default:
            res.status(400).json({
            ok: false,
            message: `Case ${method} failed. Invalid method`,
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