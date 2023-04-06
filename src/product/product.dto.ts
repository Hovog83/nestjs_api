import { IsString } from "class-validator";

export class ProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly category: string;
  @IsString()
  readonly price: number;
  @IsString()
  readonly company: string;
  @IsString()
  readonly description: string;
}