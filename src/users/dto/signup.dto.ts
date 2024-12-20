import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class signUpDto {
    @IsString()
    name: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @MinLength(6)
    password: string;
  }