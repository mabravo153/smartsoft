import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import ProductPurchaseModel from "./ProductPurcharseModel";

@Entity()
class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  money: number;

  @OneToMany(() => ProductPurchaseModel, (purchase) => purchase.user)
  purchases: ProductPurchaseModel[];
}

export default UserModel;
