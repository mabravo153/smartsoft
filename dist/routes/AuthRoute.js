"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const validation_1 = __importDefault(require("../middlewares/validation"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
class AuthRoute {
    constructor() {
        this.router = express_1.Router();
        this.AuthController = new AuthController_1.default();
        this.validateBody = validation_1.default;
    }
    getRoutes() {
        this.router.post("/login", this.AuthController.login);
        this.router.post("/signup", this.validateBody(UserModel_1.default), this.AuthController.signup);
        return this.router;
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=AuthRoute.js.map