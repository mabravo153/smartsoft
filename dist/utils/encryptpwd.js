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
exports.validatePassword = exports.encryptPwd = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const encryptPwd = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.hash(password, 12);
});
exports.encryptPwd = encryptPwd;
const validatePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.hash(password, 12);
});
exports.validatePassword = validatePassword;
//# sourceMappingURL=encryptpwd.js.map