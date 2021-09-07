"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const validation_1 = require("../middlewares/validation");
const ProductPurcharseModel_1 = __importDefault(require("../models/ProductPurcharseModel"));
const PurchaseController_1 = __importDefault(require("../controllers/PurchaseController"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.PurchaseController = new PurchaseController_1.default();
    }
    getRoutes() {
        this.router.post("/", authenticate_1.default, validation_1.validationMiddleware(ProductPurcharseModel_1.default), this.PurchaseController.store);
        return this.router;
    }
}
exports.default = ProductRoute;
//# sourceMappingURL=PurchaseRoute.js.map