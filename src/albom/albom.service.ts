import { HttpException, HttpStatus, Injectable, UseGuards } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AlbomModel } from "./albom.model";

@Injectable()
export class AlbomService {
  constructor(@InjectModel(AlbomModel) private albomRepository: typeof AlbomModel) {
  }

  async createAlbome(req, dto) {
    const user_id = req.headers.identity.id;
    const newAlbom = await this.albomRepository.create({
      ...dto,
      user_id: user_id
    });
    return newAlbom;
  }

  async getMyAlboms(req) {
    const user_id = req.headers.identity.id;
    const newAlboms = await this.albomRepository.findAll({
      where: {
        user_id: user_id
      }
    });
    return newAlboms;
  }

  async getAllAlboms() {
    const all_alboms = await this.albomRepository.findAll();
    return all_alboms;
  }

  async updateAlbome(req, param_id, dto) {
    // const user_id = req.headers.identity.id;
    const newAlbom = await this.albomRepository.findOne({
      where: {
        id: param_id,
        user_id: req.headers.identity.id
      }
    });
    if(!newAlbom){
      throw new HttpException('Your Albom not found !', HttpStatus.NOT_FOUND)
    }
    await newAlbom.update(dto)
    return newAlbom;
  }


}
