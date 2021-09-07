"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const UserModel_1 = __importDefault(require("./UserModel"));
const ProductModel_1 = __importDefault(require("./ProductModel"));
let ProductPurchaseModel = class ProductPurchaseModel {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ProductPurchaseModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDateString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], ProductPurchaseModel.prototype, "purchaseDate", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductPurchaseModel.prototype, "total", void 0);
__decorate([
    typeorm_1.ManyToOne(() => UserModel_1.default, (user) => user.purchases),
    class_validator_1.IsUUID("all"),
    __metadata("design:type", UserModel_1.default)
], ProductPurchaseModel.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => ProductModel_1.default, (product) => product.purchases, {
        cascade: true,
    }),
    typeorm_1.JoinTable(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProductPurchaseModel.prototype, "products", void 0);
ProductPurchaseModel = __decorate([
    typeorm_1.Entity()
], ProductPurchaseModel);
exports.default = ProductPurchaseModel;
//# sourceMappingURL=ProductPurcharseModel.js.map