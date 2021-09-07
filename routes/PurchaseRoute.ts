import { Router } from "express";
import authenticateUser from "../middlewares/authenticate";
import { validationMiddleware } from "../middlewares/validation";
import ProductPurcharseModel from "../models/ProductPurcharseModel";
import IRoutes from "./IRoutes";
import PurchaseController from "../controllers/PurchaseController";

class ProductRoute implements IRoutes {
  private router = Router();

  private PurchaseController: PurchaseController = new PurchaseController();

  getRoutes(): Router {
    this.router.post(
      "/",
      authenticateUser,
      validationMiddleware(ProductPurcharseModel),
      this.PurchaseController.store
    );

    return this.router;
  }
}

export default ProductRoute;
