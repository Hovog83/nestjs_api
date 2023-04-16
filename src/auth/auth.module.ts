import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../user/user.model";
import { SendgridService } from "../helpers/mailer.service";
@Module({
  controllers: [AuthController],
  providers: [AuthService, SendgridService],
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret',
      global: true,
      signOptions:{
        expiresIn: '1h'
      }
    }),
    forwardRef(()=> UserModule)
  ]
})
export class AuthModule {}
