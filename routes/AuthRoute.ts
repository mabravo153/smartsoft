import { Router } from "express";
import AuthController from "../controllers/AuthController";
import validation from "../middlewares/validation";
import UserModel from "../models/UserModel";
import IRoutes from "./IRoutes";

class AuthRoute implements IRoutes {
  private router = Router();
  private AuthController: AuthController = new AuthController();
  private validateBody = validation;

  getRoutes(): Router {
    this.router.post("/login", this.AuthController.login);
    this.router.post(
      "/signup",
      this.validateBody(UserModel),
      this.AuthController.signup
    );

    return this.router;
  }
}

export default AuthRoute;
