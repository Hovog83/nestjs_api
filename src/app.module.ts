import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModule } from './user/user.module';
import * as process from "process";
import { User } from "./user/user.model";
import { AlbomModule } from './albom/albom.module';
import { AlbomModel } from "./albom/albom.model";
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, AlbomModel],
      autoLoadModels: true,
    }),
    UserModule,
    AlbomModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
