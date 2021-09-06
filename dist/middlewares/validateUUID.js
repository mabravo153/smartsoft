"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const validateUUID = (req, res, next) => {
    let { id } = req.params;
    if (uuid_1.validate(id)) {
        next();
    }
    else {
        next(new BadRequestError_1.default("ID Must Be Valid", 400));
    }
};
exports.default = validateUUID;
//# sourceMappingURL=validateUUID.js.map