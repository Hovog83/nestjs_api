import { Body, Controller, Post, Req } from "@nestjs/common";
import { UserDto } from "../user/user.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }
  @Post('/registration')
  async registration(@Req() req, @Body() dto: UserDto) {
    return await this.authService.registration(req, dto);
  }
  @Post('/login')
  async login(@Req() req, @Body() dto: UserDto) {
    return await this.authService.login(req, dto);
  }
}
