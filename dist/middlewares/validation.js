"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginMiddleware = exports.validationMiddleware = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
function validationMiddleware(model) {
    return (req, res, next) => {
        class_validator_1.validate(class_transformer_1.plainToClass(model, req.body)).then((errors) => {
            if (errors.length) {
                const message = errors
                    .map((error) => Object.values(error.constraints || "error"))
                    .join(", ");
                next(new CustomError_1.default.BadRequestError(JSON.stringify(message), 400));
            }
            else {
                next();
            }
        });
    };
}
exports.validationMiddleware = validationMiddleware;
const validateLoginMiddleware = (req, res, next) => {
    let { email, password } = req.body;
    console.log(req.body);
    if (email && password) {
        next();
    }
    else {
        next(new CustomError_1.default.BadRequestError("email and password is required", 400));
    }
};
exports.validateLoginMiddleware = validateLoginMiddleware;
//# sourceMappingURL=validation.js.map