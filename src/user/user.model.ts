import { DataType, Table, Column, Model, HasMany } from "sequelize-typescript";
import { AlbomModel } from "../albom/albom.model";
import { ProductModel } from "../product/product.model";

interface user {
  email: string,
  password: string
  first_name: string;
  last_name: string;
}

@Table({ tableName: "user", updatedAt: false, createdAt: false })
export class User extends Model <User, user> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  verify_code: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  email_verify: boolean;

  @Column({ type: DataType.ENUM, values: ["USER", "ADMIN"], defaultValue: "USER" })
  role: string;

  @HasMany(() => AlbomModel)
  alboms: AlbomModel[];


  @HasMany(() => ProductModel)
  products: ProductModel[];


  @Column({ type: DataType.STRING, allowNull: true })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  last_name: string;

}

