import { Router } from "express";
import ProductController from "../controllers/ProductController";
import ProductModel from "../models/ProductModel";
import { validationMiddleware } from "../middlewares/validation";
import validateUUID from "../middlewares/validateUUID";
import authenticateUser from "../middlewares/authenticate";
import IRoutes from "./IRoutes";

class ProductRoute implements IRoutes {
  private router = Router();
  private ProductController: ProductController = new ProductController();

  getRoutes(): Router {
    this.router.get("/", authenticateUser, this.ProductController.index);
    this.router.get(
      "/:id",
      authenticateUser,
      validateUUID,
      this.ProductController.show
    );
    this.router.post(
      "/",
      authenticateUser,
      validationMiddleware(ProductModel),
      this.ProductController.store
    );
    this.router.put(
      "/:id",
      authenticateUser,
      validateUUID,
      validationMiddleware(ProductModel),
      this.ProductController.update
    );
    this.router.delete(
      "/:id",
      authenticateUser,
      validateUUID,
      this.ProductController.destroy
    );

    return this.router;
  }
}

export default ProductRoute;
