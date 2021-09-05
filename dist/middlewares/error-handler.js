"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || 500,
        msg: err.message || "Something went wrong try again later",
    };
    return res.status(customError.statusCode).json({ msg: customError.msg });
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=error-handler.js.map