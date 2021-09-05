"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequestError_1 = __importDefault(require("./BadRequestError"));
const CustomApiError_1 = __importDefault(require("./CustomApiError"));
const NotFountError_1 = __importDefault(require("./NotFountError"));
const UnAuthenticatedError_1 = __importDefault(require("./UnAuthenticatedError"));
exports.default = {
    CustomApiError: CustomApiError_1.default,
    NotFoundError: NotFountError_1.default,
    BadRequestError: BadRequestError_1.default,
    UnAuthenticatedError: UnAuthenticatedError_1.default,
};
//# sourceMappingURL=CustomError.js.map