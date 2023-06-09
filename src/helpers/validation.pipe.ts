import { ArgumentMetadata, HttpException, HttpStatus, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class ValidationPipe implements PipeTransform <any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);
    // console.log(errors);
    if (errors.length) {
      let messages = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
      })
      throw new HttpException(messages, HttpStatus.BAD_REQUEST);
    }
    return value;
  }


}