import { HttpException, Injectable } from "@nestjs/common";
import { UserDto } from "../user/user.dto";
import { GenerateNumber } from "../helpers/generateNumber";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../user/user.model";

@Injectable()
export class AuthService {
  constructor(
              private jwtService: JwtService,
              private userService: UserService,
              @InjectModel(User) private userRepo: typeof User) {
  }

  async registration(req, dto: UserDto) {
    const us = await this.userRepo.findOne({
      where: {email: dto.email}
    })
    if(us){
      throw new HttpException('User with tis email already exists', 500 );
    }
    const code = GenerateNumber.generateNumber();
    // @ts-ignore
    const user = await this.userRepo.create({ ...dto, verify_code: code });
    const payload = {
      email: user.email,
    };
    const token = this.jwtService.sign(payload)
    req.headers.token = token;
    return {
      email: user.email,
      code: code,
      email_verify: user.email_verify,
      token: token
    };
  }

  async login(req, dto: UserDto) {
    // @ts-ignore
    const user = await this.userRepo.findOne({
      where: {
        email: dto.email
      },
    });
    if(!user || (user.password != dto.password)){
      throw new HttpException('incorrect email or password', 500);
    }
    const payload = {
      email: user.email,
    };
    const token = this.jwtService.sign(payload);
    req.headers.token = token;
    return {
      email: user.email,
      role: user.role,
      token: token
    };
  }
}
