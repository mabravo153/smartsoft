"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.ProductsController = new ProductsController_1.default();
    }
    getRoutes() {
        this.router.get("/", this.ProductsController.index);
        return this.router;
    }
}
exports.default = ProductRoute;
//# sourceMappingURL=ProductsRoute.js.map