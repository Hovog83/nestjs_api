import { CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AdminGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const token = req.headers.token;
      if (!token) {
        throw new HttpException("Unauthorized err", 500);
      }
      if(req.headers.identity.role !== 'ADMIN'){
        throw new HttpException("You are not ADMIN", 500);
      }
      return true;
    } catch (e) {
      throw new HttpException("You are not ADMIN", 500);
    }

  }

}