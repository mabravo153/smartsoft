"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomApiError extends Error {
    constructor(msg, statusCode) {
        super(msg);
        this.statusCode = statusCode;
    }
}
exports.default = CustomApiError;
//# sourceMappingURL=CustomApiError.js.map