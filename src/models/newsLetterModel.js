import mongoose from "mongoose";
const newsLetterSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body: String
})
export const newsLetterModel = mongoose.model("newsleter",newsLetterSchema)