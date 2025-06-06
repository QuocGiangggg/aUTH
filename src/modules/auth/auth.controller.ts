import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { request } from 'http';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService ,
    private readonly userService: UsersService) {}
  @Post('/register')
  register(@Body() userData: any) {
    return this.userService.createUser(userData)
  }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() request: any){
        return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request() req: any){
    return req.user;
  }
}
