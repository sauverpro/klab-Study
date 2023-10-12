
import { newsLetterModel } from "../models"
export const getData = async (req, res) => {
   let data = await newsLetterModel.find()
    res.status(200).json({"status":200, "data":data})
}
