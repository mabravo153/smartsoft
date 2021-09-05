import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
  email: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  money: number;
}

export default UserModel;
