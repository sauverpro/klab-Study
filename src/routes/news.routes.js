import express from "express";
const newsLetter = express.Router()
import { deleteNews,update,user,addNews,getData } from "../controllers";
newsLetter.delete("/delete/:id", deleteNews)
newsLetter.get('/id/:paramid',user);
newsLetter.post('/addNews',addNews)
newsLetter.patch('/update/:paramid',update);
newsLetter.get('/', getData)

export default newsLetter
