import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { AlbomService } from "./albom.service";
import { AlbomDto } from "./albom.dto";
import { AdminGuard } from "../helpers/admin-guard";
import { AuthGuard } from "../auth/auth-guard";

@Controller('albom')
export class AlbomController {
  constructor(private albomService: AlbomService) {
  }

  @UseGuards(AuthGuard)
  @Post('/create')
  async createAlbome(@Req() req, @Body() dto: AlbomDto) {
    return await this.albomService.createAlbome(req, dto);
  }

  @UseGuards(AuthGuard)
  @Get('/myalboms')
  async getMyAlboms(@Req() req){
    return await this.albomService.getMyAlboms(req);
  }

  @UseGuards(AuthGuard)
  @Post('/update/:id')
  async updateAlbome(@Req() req,@Param() param, @Body() dto: AlbomDto) {
    return await this.albomService.updateAlbome(req, param.id, dto);
  }

  @UseGuards(AuthGuard,AdminGuard)
  @Get('/allalboms')
  async getAllAlboms(){
    return await this.albomService.getAllAlboms();
  }

}
