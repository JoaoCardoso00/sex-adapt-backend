import { ConfigService } from '@nestjs/config';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@models/user/user.service';
import { Tokens } from './@types/tokens.type';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService, private readonly configService: ConfigService) {}

  //DB CHANGES
  async signup_local(dto: AuthDto): Promise<Tokens> {
    const new_user = await this.userService.create({
      email: dto.email,
      name: dto.name,
      password: dto.password,
      hashedRefreshToken: null
    });

    const tokens = await this.getTokens(new_user.id, new_user.email);
    await this.updateRtHash(new_user.id, tokens.refresh_token);

    return tokens;
  }

  async signin_local(dto: AuthDto): Promise<Tokens> {
    const user = await this.userService.findOneByEmail(dto.email)

    if (!user) throw new UnauthorizedException();

    const password_match = await compare(dto.password, user.password);
    if (!password_match) throw new UnauthorizedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string) {
    await this.userService.update(userId, {
      hashedRefreshToken: null
    })
  }

  async refresh_token(userId: string, rt: string) {
    const user = await this.userService.findOneById(userId)
    if (!user || !user.hashedRefreshToken) throw new UnauthorizedException();

    const rt_match = await compare(rt, user.hashedRefreshToken);
    if (!rt_match) throw new UnauthorizedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  //HELP FUNCTIONS

  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);

    await this.userService.update(userId, {
      hashedRefreshToken: hash
    })
  }

  hashData(data: string) {
    return hash(data, 10);
  }


  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_AT_EXPIRES_IN'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_RT_EXPIRES_IN'),
        },
      ),
    ]);

    return {
      refresh_token: rt,
      access_token: at,
    };
  }
}