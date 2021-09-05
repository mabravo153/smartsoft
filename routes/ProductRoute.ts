import { Router } from "express";
import ProductController from "../controllers/ProductController";
import IRoutes from "./IRoutes";

class ProductRoute implements IRoutes {
  private router = Router();
  private ProductController: ProductController = new ProductController();

  getRoutes(): Router {
    this.router.get("/", this.ProductController.index);
    this.router.get("/:id", this.ProductController.show);
    this.router.post("/", this.ProductController.index);
    this.router.put("/:id", this.ProductController.index);
    this.router.delete("/:id", this.ProductController.index);

    return this.router;
  }
}

export default ProductRoute;
