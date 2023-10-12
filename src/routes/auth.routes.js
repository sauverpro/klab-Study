import express from "express";
const AuthRouter = express.Router()
import { siginUp, login } from "../controllers/authentication";
AuthRouter.post('/login',login)
AuthRouter.post('/signup',siginUp)
export default AuthRouter