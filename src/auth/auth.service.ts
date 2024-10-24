import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LogInUserDto } from './dto/log-in-user.dto';
import { UsersRepository } from '../users/users.repository';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
  }
  async logIn(data: LogInUserDto): Promise<{token: string}>  {
    const user = await this.userRepo.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('Access Denied')
    }

    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);

    if(!isPasswordCorrect) {
      throw new UnauthorizedException('Incorrect password')
    }

    const token = await this.jwtService.signAsync({
      username: user.username,
      email: user.email,
    })

    return { token };

  }
}
