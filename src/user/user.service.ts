import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UserDto } from "./user.dto";
import { GenerateNumber } from "../helpers/generateNumber";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private Users: typeof User) {
  }

  // async createUser(req, dto: UserDto) {
  //   const us = await this.Users.findOne({
  //     where: {
  //       email: dto.email
  //     }
  //   });
  //   if(us){
  //     throw new HttpException('User with tis email already exists', 500 );
  //   }
  //   const code = GenerateNumber.generateNumber();
  //   // @ts-ignore
  //   const user = await this.Users.create({ ...dto, verify_code: code });
  //   return user;
  // }

  async updateUser(id: number, dto: UserDto) {
    let user = await this.Users.findOne({
      where: {
        id: id
      },
      attributes: ["id", "email"]
    });
    if (!user) {
      throw new HttpException("User not found", 500); //Error-ի տեսակ
    }
    await user.update(dto);
    return user;
  }

  async deleteUser(id: number) {
    let user = await this.Users.findOne({
      where: {
        id: id
      },
      attributes: ["id", "email"]
    });
    if (!user) {
      throw new HttpException("User not found", 500); //Error-ի տեսակ
    }
    await user.destroy();
    return {
      success: true
    };
  }

  async getUserByID(id: number) {
    let user = await this.Users.findOne({
      where: {
        id: id
      }
    });
    if (!user) {
      throw new HttpException("User not found", 500); //Error-ի տեսակ
    }
    return user;
  }

  async getUserByEmail(email: string) {
    let user = await this.Users.findOne({
      where: {
        email: email
      }
    });
    if (!user) {
      throw new HttpException("User not found", 500); //Error-ի տեսակ
    }
    return user;
  }

  async getAllUsers() {
    return await this.Users.findAll();
  }

}
