import { Response, Request, NextFunction } from "express";
import { getRepository } from "typeorm";
import CustomError from "../errors/CustomError";
import ProductModel from "../models/ProductModel";
import ProductPurchaseModel from "../models/ProductPurcharseModel";
import UserModel from "../models/UserModel";

class PurchaseController {
  async store(req: Request, res: Response, next: NextFunction) {
    let repo = getRepository(ProductPurchaseModel);
    let { purchaseDate, products, user, total } = req.body;
    let productToInsert: ProductModel[] = [];

    try {
      let userFind = await getRepository(UserModel).findOne(user);

      if (userFind) {
        for (const item of products) {
          let product = await getRepository(ProductModel).findOne(item);
          if (product) {
            productToInsert = [...productToInsert, product];
          }
        }

        let purchase = new ProductPurchaseModel();
        purchase.purchaseDate = purchaseDate;
        purchase.total = total;
        purchase.user = userFind;
        purchase.products = productToInsert;

        await repo.save(purchase);

        return res.status(201).json({
          code: 201,
          msg: {
            purchaseDate,
            total,
            user,
            productToInsert,
          },
        });
      } else {
        next(new CustomError.NotFoundError("User Not Fount", 404));
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
}

export default PurchaseController;
