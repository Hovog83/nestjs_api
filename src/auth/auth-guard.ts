// @ts-nocheck
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../user/user.model";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userRepo: typeof User
  ) {
  }
  async canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const token = req.headers.authorization;
      if (!token) {
        throw new HttpException("Unauthorized error", HttpStatus.BAD_REQUEST);
      }
      const decode = this.jwtService.verify(token);

      if (!decode) {
        throw new HttpException("Unauthorized error", HttpStatus.BAD_REQUEST);
      }
      const user = await this.userRepo.findOne({
        where: {
          email: decode.email,
        },
        attribute: [
          "id", "email", "role"
        ]
      });
      req.headers.identity = user;
      return true;
    } catch (e) {
      throw new HttpException("Unauthorized error", HttpStatus.BAD_REQUEST);
    }

  }

}