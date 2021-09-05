"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomApiError_1 = __importDefault(require("./CustomApiError"));
class BadRequestError extends CustomApiError_1.default {
    constructor(msg, statusCode) {
        super(msg, statusCode);
        this.statusCode = statusCode;
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map