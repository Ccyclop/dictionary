import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInUserDto } from './dto/log-in-user.dto';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: LogInUserDto) {
    return this.authService.logIn(data);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  profile(@Request() req) {
    return req.user;
  }
}
