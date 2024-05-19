import {IsEmail, IsOptional, IsString, MinLength} from "class-validator";

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  password: string
}