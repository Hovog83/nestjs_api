import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductModel } from "./product.model";
import { User } from "../user/user.model";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    SequelizeModule.forFeature([
      ProductModel,
      User
    ])
  ]
})
export class ProductModule {}
