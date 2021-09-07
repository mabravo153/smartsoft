import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import UserModel from "./UserModel";
import ProductModel from "./ProductModel";

@Entity()
class ProductPurchaseModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsDateString()
  @IsNotEmpty()
  purchaseDate: Date;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @ManyToOne(() => UserModel, (user) => user.purchases)
  @IsUUID("all")
  user: UserModel;

  @ManyToMany((type) => ProductModel, (product) => product.purchases, {
    cascade: true,
  })
  @JoinTable()
  @IsArray()
  products: ProductModel[];
}

export default ProductPurchaseModel;
