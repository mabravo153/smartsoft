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
class ProductController {
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchQuery = {};
            let { name } = req.query;
            if (name) {
                searchQuery["name"] = name;
            }
            let products = yield typeorm_1.getRepository(ProductModel_1.default).find({
                where: searchQuery,
            });
            if (!products.length) {
                next(new CustomError_1.default.NotFoundError("Products Not Found", 404));
            }
            else {
                return res.status(200).json({
                    code: 200,
                    msg: products,
                });
            }
        });
    }
    show(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let product = yield typeorm_1.getRepository(ProductModel_1.default).findOne(id);
                if (!product) {
                    next(new CustomError_1.default.NotFoundError("Products Not Found", 404));
                }
                else {
                    return res.status(200).json({
                        code: 200,
                        msg: product,
                    });
                }
            }
            catch (error) {
                next(new CustomError_1.default.CustomApiError("Something went wrong try again later", 500));
            }
        });
    }
    store(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, category, price, quantity } = req.body;
            let repository = typeorm_1.getRepository(ProductModel_1.default);
            let product = new ProductModel_1.default();
            product.name = name;
            product.category = category;
            product.price = price;
            product.quantity = quantity;
            try {
                yield repository.save(product);
                return res.status(201).json({
                    code: 201,
                    msg: product,
                });
            }
            catch (error) {
                next(new CustomError_1.default.CustomApiError("Something went wrong try again later", 500));
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, category, price, quantity } = req.body;
            let { id } = req.params;
            let repository = typeorm_1.getRepository(ProductModel_1.default);
            let product = yield repository.findOne(id);
            if (!product) {
                next(new CustomError_1.default.NotFoundError("Products Not Found", 404));
            }
            else {
                product.name = name;
                product.category = category;
                product.price = price;
                product.quantity = quantity;
                try {
                    yield repository.save(product);
                    return res.status(201).json({
                        code: 201,
                        msg: product,
                    });
                }
                catch (error) {
                    next(new CustomError_1.default.CustomApiError("Something went wrong try again later", 500));
                }
            }
        });
    }
    destroy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let repository = typeorm_1.getRepository(ProductModel_1.default);
            let product = yield repository.findOne(id);
            if (!product) {
                next(new CustomError_1.default.NotFoundError("Products Not Found", 404));
            }
            else {
                try {
                    yield repository.remove(product);
                    return res.status(204).json({
                        code: 204,
                        msg: "Product Deleted",
                    });
                }
                catch (error) {
                    next(new CustomError_1.default.CustomApiError("Something went wrong try again later", 500));
                }
            }
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map