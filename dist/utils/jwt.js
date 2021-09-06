"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (data) => {
    let secret = process.env.SECRET_KEY || "llavesecreta";
    const token = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        user_id: data,
    }, secret);
    return token;
};
exports.createToken = createToken;
const validateToken = (token) => {
    let secret = process.env.SECRET_KEY || "llavesecreta";
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.validateToken = validateToken;
//# sourceMappingURL=jwt.js.map