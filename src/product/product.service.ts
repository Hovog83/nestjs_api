// @ts-nocheck
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductModel } from "./product.model";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductService {
  constructor(@InjectModel(ProductModel) private productRepository: typeof ProductModel) {
  }

  async createProduct(dto: ProductDto) {
    const new_product = await this.productRepository.create(dto);
    return new_product;
  }

  async getProductById(id) {
    const product = await this.productRepository.findOne({
      where: { id: id }
    });
    if(!product){
      throw new HttpException('Product not found !', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async updateProduct() {

  }

  async deleteProduct() {

  }
}
