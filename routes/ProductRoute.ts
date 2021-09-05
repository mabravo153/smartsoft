import { Router } from "express";
import ProductController from "../controllers/ProductController";
import IRoutes from "./IRoutes";

class ProductRoute implements IRoutes {
  private router = Router();
  private ProductController: ProductController = new ProductController();

  getRoutes(): Router {
    this.router.get("/", this.ProductController.index);

    return this.router;
  }
}

export default ProductRoute;
