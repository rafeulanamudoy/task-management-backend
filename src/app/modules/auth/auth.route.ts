import express from "express";
import { UserController } from "./auth.controller";

const router = express.Router();

export const UserRoutes = router;
router.post("/signUp", UserController.createUser);
