import { Response, Request, NextFunction } from "express";
import { getRepository } from "typeorm";
import CustomError from "../errors/CustomError";
import ProductModel from "../models/ProductModel";

class ProductController {
  async index(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
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
    } else {
      return res.status(200).json({
        code: 200,
        msg: products,
      });
    }
  }

  async show(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      let { id } = req.params;
      let product = await getRepository(ProductModel).findOne(id);
      if (!product) {
        next(new CustomError.NotFoundError("Products Not Found", 404));
      } else {
        return res.status(200).json({
          code: 200,
          msg: product,
        });
      }
    } catch (error) {
      next(
        new CustomError.CustomApiError(
          "Something went wrong try again later",
          500
        )
      );
    }
  }

  async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    let { name, category, price, quantity } = req.body;
    let repository = getRepository(ProductModel);

    let product = new ProductModel();
    product.name = name;
    product.category = category;
    product.price = price;
    product.quantity = quantity;
    try {
      await repository.save(product);

      return res.status(201).json({
        code: 201,
        msg: product,
      });
    } catch (error) {
      next(
        new CustomError.CustomApiError(
          "Something went wrong try again later",
          500
        )
      );
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    let { name, category, price, quantity } = req.body;
    let { id } = req.params;

    let repository = getRepository(ProductModel);

    let product = await repository.findOne(id);
    if (!product) {
      next(new CustomError.NotFoundError("Products Not Found", 404));
    } else {
      product.name = name;
      product.category = category;
      product.price = price;
      product.quantity = quantity;
      try {
        await repository.save(product);

        return res.status(201).json({
          code: 201,
          msg: product,
        });
      } catch (error) {
        next(
          new CustomError.CustomApiError(
            "Something went wrong try again later",
            500
          )
        );
      }
    }
  }

  async destroy(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    let { id } = req.params;

    let repository = getRepository(ProductModel);

    let product = await repository.findOne(id);
    if (!product) {
      next(new CustomError.NotFoundError("Products Not Found", 404));
    } else {
      try {
        await repository.remove(product);

        return res.status(204).json({
          code: 204,
          msg: "Product Deleted",
        });
      } catch (error) {
        next(
          new CustomError.CustomApiError(
            "Something went wrong try again later",
            500
          )
        );
      }
    }
  }
}

export default ProductController;
