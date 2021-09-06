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
const typeorm_1 = require("typeorm");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const jwt_1 = require("../utils/jwt");
const encryptpwd_1 = require("../utils/encryptpwd");
class AuthController {
    signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, lastName, email, password, money } = req.body;
            let repo = typeorm_1.getRepository(UserModel_1.default);
            let user = yield repo.findOne({
                where: {
                    email,
                },
            });
            if (user) {
                next(new CustomError_1.default.BadRequestError("Email Must be Unique", 400));
            }
            else {
                try {
                    // almacenar los datos
                    let newUser = new UserModel_1.default();
                    let passwordHash = yield encryptpwd_1.encryptPwd(password);
                    newUser.name = name;
                    newUser.lastName = lastName;
                    newUser.email = email;
                    newUser.password = passwordHash;
                    newUser.money = money;
                    yield repo.save(newUser);
                    let token = jwt_1.createToken(newUser.id);
                    return res.status(201).json({
                        code: 201,
                        msg: {
                            userId: newUser.id,
                            token,
                        },
                    });
                }
                catch (error) {
                    console.log(error);
                    next(new CustomError_1.default.BadRequestError("Something went wrong try again later", 500));
                }
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map