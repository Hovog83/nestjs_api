import { IsString } from "class-validator";

export class AlbomDto {
  @IsString()
  readonly title: string;
}