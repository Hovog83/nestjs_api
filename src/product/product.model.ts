import { DataType, Table, Column, Model, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../user/user.model";

interface product {
  name: string,
  category: string
  price: string;
  company: string;
  description: string;
}

@Table({ tableName: "product", updatedAt: false, createdAt: false })
export class ProductModel extends Model <ProductModel, product> {
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

  @Column({ type: DataType.INTEGER, defaultValue: 0})
  quantity: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;


  @BelongsTo(() => User)
  author: User;



}

