import { DataType, Table, Column, Model, HasMany, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user.model";

interface product {
  email: string,
  password: string
  first_name: string;
  last_name: string;
}

@Table({ tableName: "product", updatedAt: false, createdAt: false })
export class Product extends Model <Product, product> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  available: boolean;

  @Column({ type: DataType.STRING, allowNull: false })
  category: string;

  @Column({ type: DataType.STRING, allowNull: false })
  company: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;



  @BelongsTo(() => User)
  alboms: User[];



}

