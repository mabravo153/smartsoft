import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class ProductPurchaseModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsDateString()
  @IsNotEmpty()
  purchaseDate: Date;

  @Column()
  @IsString()
  @IsNotEmpty()
  total: string;
}

export default ProductPurchaseModel;
