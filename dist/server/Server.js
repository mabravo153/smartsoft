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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const ProductRoute_1 = __importDefault(require("../routes/ProductRoute"));
const AuthRoute_1 = __importDefault(require("../routes/AuthRoute"));
const error_handler_1 = __importDefault(require("../middlewares/error-handler"));
const PurchaseRoute_1 = __importDefault(require("../routes/PurchaseRoute"));
class Server {
    constructor() {
        this.routesAPI = {
            auth: "/api/v1/auth",
            products: "/api/v1/products",
            orders: "/api/v1/orders",
        };
        this.app = express_1.default();
        this.port = process.env.PORT || "9000";
        this.middlewares();
        this.routes();
        this.errors();
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`server up since port ${this.port}`);
            this.dbConnection();
        });
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.routesAPI.auth, new AuthRoute_1.default().getRoutes());
        this.app.use(this.routesAPI.products, new ProductRoute_1.default().getRoutes());
        this.app.use(this.routesAPI.orders, new PurchaseRoute_1.default().getRoutes());
    }
    errors() {
        this.app.use(error_handler_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield typeorm_1.createConnection();
            }
            catch (error) {
                console.log(`Error ${error}`);
                setTimeout(() => {
                    this.dbConnection();
                }, 2000);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map