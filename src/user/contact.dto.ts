import { IsEmail, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class ContactDto {

  @IsString()
  @Length(2, 15)
  @IsNotEmpty()
  readonly name: string;

  @Length(2, 15)
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly message: string;

  readonly phone: string;
  readonly country: string;


}