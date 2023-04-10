import { DataType, Table, Column, Model, HasMany } from "sequelize-typescript";
import { Generated, PrimaryGeneratedColumn } from "typeorm";

interface contact {
  name: string;
  email: string;
  message: string;
  phone: string;
  country: string;
}

@Table({ tableName: "contact", updatedAt: false, createdAt: false })
export class ContactModel extends Model <ContactModel, contact> {

  // @PrimaryGeneratedColumn('uuid')
  // @Generated('uuid')
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  message: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: true })
  country: string;

}

