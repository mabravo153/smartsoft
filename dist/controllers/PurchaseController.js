"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const ProductPurcharseModel_1 = __importDefault(require("../models/ProductPurcharseModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
class PurchaseController {
    store(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = typeorm_1.getRepository(ProductPurcharseModel_1.default);
            let { purchaseDate, products, user, total } = req.body;
            let productToInsert = [];
            try {
                let userFind = yield typeorm_1.getRepository(UserModel_1.default).findOne(user);
                if (userFind) {
                    for (const item of products) {
                        let product = yield typeorm_1.getRepository(ProductModel_1.default).findOne(item);
                        if (product) {
                            productToInsert = [...productToInsert, product];
                        }
                    }
                    let purchase = new ProductPurcharseModel_1.default();
                    purchase.purchaseDate = purchaseDate;
                    purchase.total = total;
                    purchase.user = userFind;
                    purchase.products = productToInsert;
                    yield repo.save(purchase);
                    return res.status(201).json({
                        code: 201,
                        msg: {
                            purchaseDate,
                            total,
                            user,
                            productToInsert,
                        },
                    });
                }
                else {
                    next(new CustomError_1.default.NotFoundError("User Not Fount", 404));
                }
            }
            catch (error) {
                next(new CustomError_1.default.CustomApiError("Something went wrong try again later", 500));
            }
        });
    }
}
exports.default = PurchaseController;
//# sourceMappingURL=PurchaseController.js.map