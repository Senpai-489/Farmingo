import { Router } from "express";
import { getUserInfo, login, signup } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { sendQuery } from "../controllers/queryController.js";

const authRoutes = Router();

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.get("/user-info", verifyToken, getUserInfo)
authRoutes.post("/query",sendQuery)

export default authRoutes;