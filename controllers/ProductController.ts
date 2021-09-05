import { Response, Request, NextFunction } from "express";
import { getRepository } from "typeorm";
import CustomError from "../errors/CustomError";
import ProductModel from "../models/ProductModel";

class ProductController {
  async index(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    let searchQuery: { [key: string]: any } = {};
    let { name } = req.query;
    if (name) {
      searchQuery["name"] = name;
    }

    let products = await getRepository(ProductModel).find({
      where: searchQuery,
    });

    if (!products.length) {
      next(new CustomError.NotFoundError("Products Not Found", 404));
    }
    return res.json({
      code: 200,
      msg: products,
    });
  }

  async show(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    let { id } = req.params;
    let product = await getRepository(ProductModel).findOne(id);
    if (!product) {
      next(new CustomError.NotFoundError("Products Not Found", 404));
    }
    return res.json({
      code: 200,
      msg: product,
    });
  }
}

export default ProductController;
