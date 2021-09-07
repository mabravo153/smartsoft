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
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const ProductPurcharseModel_1 = __importDefault(require("./ProductPurcharseModel"));
let ProductModel = class ProductModel {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ProductModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductModel.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductModel.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductModel.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductModel.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => ProductPurcharseModel_1.default, (purchase) => purchase.products),
    __metadata("design:type", Array)
], ProductModel.prototype, "purchases", void 0);
ProductModel = __decorate([
    typeorm_1.Entity()
], ProductModel);
exports.default = ProductModel;
//# sourceMappingURL=ProductModel.js.map