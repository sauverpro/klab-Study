import { newsLetterModel } from "../models";
export const addNews = async(req, res) => {
    try {
        await newsLetterModel.create(req.body)
        res.status(201).json({
            message: "user created"
        });
    } catch (error) {
        console.log(error);
    }
}
