import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class loginDto{

    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  }