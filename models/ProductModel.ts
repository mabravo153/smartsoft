import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import ProductPurchaseModel from "./ProductPurcharseModel";

@Entity()
class ProductModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  category: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ManyToMany((type) => ProductPurchaseModel, (purchase) => purchase.products)
  purchases: ProductPurchaseModel[];
}

export default ProductModel;
