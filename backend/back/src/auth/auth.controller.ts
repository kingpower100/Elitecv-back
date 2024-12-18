import { Body, Controller, Get, Post } from '@nestjs/common';
import { loginDto } from 'src/users/dto/login.dto';
import { signUpDto } from 'src/users/dto/signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('signup')
    signUp(@Body() signUpDto: signUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    @Post('login')
    login(@Body() loginDto: loginDto): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    }
}
