import { Router } from "express";
import {
  handleUserLogin,
  handleUserRegistration,
} from "../controllers/user_controllers";
export const router: Router = Router();

router.get("/register", handleUserRegistration); // Registering the user
router.get("/login", handleUserLogin); // Logging in the user
