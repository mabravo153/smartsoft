import { Router } from "express";
import AuthController from "../controllers/AuthController";
import {
  validationMiddleware,
  validateLoginMiddleware,
} from "../middlewares/validation";
import UserModel from "../models/UserModel";
import IRoutes from "./IRoutes";

class AuthRoute implements IRoutes {
  private router = Router();
  private AuthController: AuthController = new AuthController();

  getRoutes(): Router {
    this.router.post(
      "/login",
      validateLoginMiddleware,
      this.AuthController.login
    );
    this.router.post(
      "/signup",
      validationMiddleware(UserModel),
      this.AuthController.signup
    );

    return this.router;
  }
}

export default AuthRoute;
