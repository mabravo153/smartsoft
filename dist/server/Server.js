"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || "9000";
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`server up since port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map