"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.ProductController = new ProductController_1.default();
    }
    getRoutes() {
        this.router.get("/", this.ProductController.index);
        this.router.get("/:id", this.ProductController.show);
        this.router.post("/", this.ProductController.index);
        this.router.put("/:id", this.ProductController.index);
        this.router.delete("/:id", this.ProductController.index);
        return this.router;
    }
}
exports.default = ProductRoute;
//# sourceMappingURL=ProductRoute.js.map