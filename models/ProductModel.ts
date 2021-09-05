import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

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
}

export default ProductModel;
