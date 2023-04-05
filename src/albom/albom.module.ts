import { forwardRef, Module } from "@nestjs/common";
import { AlbomController } from './albom.controller';
import { AlbomService } from './albom.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { AlbomModel } from "./albom.model";
import { User } from "../user/user.model";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  controllers: [AlbomController],
  providers: [AlbomService, ],
  imports: [
    SequelizeModule.forFeature([
      AlbomModel,
      User,
    ]),
  ]
})
export class AlbomModule {}
