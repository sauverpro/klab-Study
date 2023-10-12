import express from "express";
import newsLetter from "./news.routes";
import AuthRouter from "./auth.routes";
const mainRouter = express.Router()
mainRouter.use("/newsLetter", newsLetter)
mainRouter.use("/newsLetter/auth", AuthRouter)
export default mainRouter