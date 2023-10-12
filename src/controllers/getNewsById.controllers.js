import { newsLetterModel } from "../models";
 export const user = async(req, res) => {
    try {
        console.log(`data is here`);
        console.log(req.params.paramid);
        let data = await newsLetterModel.findById(req.params.paramid)
        
        res.status(200).json({
            message: "News has found",
            data: data
        })
    } catch (error) {
        console.log(error);
    }
}