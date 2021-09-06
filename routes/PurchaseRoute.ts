import { Router } from "express";
import ProductController from "../controllers/ProductController";
import ProductModel from "../models/ProductModel";
import validation from "../middlewares/validation";
import validateUUID from "../middlewares/validateUUID";
import IRoutes from "./IRoutes";

class ProductRoute implements IRoutes {
  private router = Router();
  private ProductController: ProductController = new ProductController();
  private validateBody = validation;

  getRoutes(): Router {
    this.router.get("/", this.ProductController.index);
    this.router.get("/:id", validateUUID, this.ProductController.show);
    this.router.post(
      "/",
      this.validateBody(ProductModel),
      this.ProductController.store
    );
    this.router.put(
      "/:id",
      validateUUID,
      this.validateBody(ProductModel),
      this.ProductController.update
    );
    this.router.delete("/:id", validateUUID, this.ProductController.destroy);

    return this.router;
  }
}

export default ProductRoute;
