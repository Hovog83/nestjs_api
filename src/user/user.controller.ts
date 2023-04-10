import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { AuthGuard } from "../auth/auth-guard";
import { AdminGuard } from "../helpers/admin-guard";
import { ContactDto } from "./contact.dto";

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}

  @UseGuards(AuthGuard)
  @Put('/update/:id')
  async updateUser(@Param() param, @Body() dto: UserDto){
    // @ts-ignore
    return await this.userService.updateUser(param.id, dto);
  }

  @UseGuards(AuthGuard, AdminGuard)
  @Delete('/delete/:id')
  async deleteUser(@Param() param){
    return await this.userService.deleteUser(param.id);
  }

  @UseGuards(AuthGuard)
  @Get('/get/:id')
  async getUserByID(@Param() param){
    return await this.userService.getUserByID(param.id);
  }

  @UseGuards(AuthGuard, AdminGuard)
  @Get('/getAll')
  async getAllUsers(){
    return await this.userService.getAllUsers();
  }

  @UseGuards(AuthGuard)
  @Post('/contact')
  async contactUs(@Body() dto: ContactDto){
    return await this.userService.contactUs(dto);
  }
}
