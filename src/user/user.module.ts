import { forwardRef, Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { AuthModule } from "../auth/auth.module";
import { AlbomModel } from "../albom/albom.model";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthGuard } from "../auth/auth-guard";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([
      User,
      AlbomModel,
    ]),
    forwardRef(() => AuthModule),
  ],
  exports: [
    UserService
  ]

})
export class UserModule {}
