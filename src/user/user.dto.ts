import { IsEmail, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class UserDto {
  readonly last_name: string;
  readonly first_name: string;
  // readonly username: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @Length(2, 15)
  @IsNotEmpty()
  readonly password: string;
}