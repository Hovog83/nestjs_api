import { Body, Controller, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @Post('/create')
  async createProduct(@Body() dto: ProductDto){
    return await this.productService.createProduct(dto)
  }

  @Post('/getProduct/:id')
  async getProductById(@Param() param){
    return await this.productService.getProductById(param.id)
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
