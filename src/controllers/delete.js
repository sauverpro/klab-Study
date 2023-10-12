// let database = require("../utils/mockaData");
// import { database } from "../utils/mockaData";
import { newsLetterModel } from "../models";
export const deleteNews = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // Use filter() to remove item with the specified ID from the database array
        let data = await newsLetterModel.findByIdAndDelete({ _id: id });
       
            if (data) {
                res.status(200).json({message:'Document deleted successfully:', data : data})
                console.log('Document deleted successfully:', data);
              } else {
                console.log('Document not found.');
              }

    } catch (error) {
        console.error(error);
        // Internal server error, send error response
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

