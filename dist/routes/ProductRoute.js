"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const validation_1 = require("../middlewares/validation");
const validateUUID_1 = __importDefault(require("../middlewares/validateUUID"));
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.ProductController = new ProductController_1.default();
    }
    getRoutes() {
        this.router.get("/", authenticate_1.default, this.ProductController.index);
        this.router.get("/:id", authenticate_1.default, validateUUID_1.default, this.ProductController.show);
        this.router.post("/", authenticate_1.default, validation_1.validationMiddleware(ProductModel_1.default), this.ProductController.store);
        this.router.put("/:id", authenticate_1.default, validateUUID_1.default, validation_1.validationMiddleware(ProductModel_1.default), this.ProductController.update);
        this.router.delete("/:id", authenticate_1.default, validateUUID_1.default, this.ProductController.destroy);
        return this.router;
    }
}
exports.default = ProductRoute;
//# sourceMappingURL=ProductRoute.js.map