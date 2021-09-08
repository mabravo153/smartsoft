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
const jwt_1 = require("../utils/jwt");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { authorization } = req.headers;
    if (authorization) {
        try {
            const validate = jwt_1.validateToken(authorization);
            next();
        }
        catch (error) {
            next(new CustomError_1.default.UnAuthenticatedError("Authentication invalid", 401));
        }
    }
    else {
        next(new CustomError_1.default.UnAuthenticatedError("No credentials sent!", 401));
    }
});
exports.default = authenticateUser;
//# sourceMappingURL=authenticate.js.map