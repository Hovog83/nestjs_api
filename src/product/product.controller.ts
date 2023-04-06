import { Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @Post('/create')
  async createProduct(){
    return await this.productService.createProduct()
  }

  @Post('/getProduct/:id')
  async getProductById(){
    return await this.productService.getProductById()
  }

  @Post('/update/:id')
  async updateProduct(){
    return await this.productService.updateProduct()
  }

  @Post('/delete')
  async deleteProduct(){
    return await this.productService.deleteProduct()
  }



}
