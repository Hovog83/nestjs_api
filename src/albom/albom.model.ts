import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../user/user.model";

interface albom {
  title: string,
}

@Table({ tableName: "albom", createdAt: false, updatedAt: false })
export class AlbomModel extends Model<AlbomModel, albom> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @BelongsTo(() => User)
  author: User;

}