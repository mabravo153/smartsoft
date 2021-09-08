"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => {
    return res.status(404).json({
        msg: "Route does not exist",
    });
};
exports.default = notFound;
//# sourceMappingURL=route.js.map