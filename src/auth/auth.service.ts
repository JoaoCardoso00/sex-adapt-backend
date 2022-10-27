import { AccessibilityEntity } from './../models/accessibility/entities/accessibility.entity';
import { LoginFailedException } from './../common/exceptions/login-failed.exception';
import { NotFoundException } from './../common/exceptions/not-found.exception';
import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@models/user/user.service';
import { Tokens } from './@types/tokens.type';
import { AccessibilityService } from '@providers/accessibility/accessibility.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private accessibilityService: AccessibilityService,
    private jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  //DB CHANGES
  async signup_local(userInfo: CreateUserDto): Promise<Tokens> {
    const accessibility = await this.accessibilityService.create(
      userInfo.accessibilities
    );
    const new_user = await this.userService.create({
      email: userInfo.email,
      name: userInfo.name,
      password: userInfo.password,
      hashedRefreshToken: null,
      accessibilities: accessibility.id as unknown as AccessibilityEntity
    });

    const tokens = await this.getTokens(new_user.id, new_user.email);
    await this.updateRtHash(new_user.id, tokens.refresh_token);

    return tokens;
  }

  async signin_local(authInfo: AuthDto): Promise<Tokens> {
    const user = await this.userService.findOneByEmail(authInfo.email);

    if (!user) throw new LoginFailedException();

    const password_match = await compare(authInfo.password, user.password);
    if (!password_match) throw new LoginFailedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string) {
    await this.userService.update(userId, {
      hashedRefreshToken: null
    });
  }

  async updateRefreshToken(userId: string, refresh_token: string) {
    const user = await this.userService.findOneById(userId);
    if (!user || !user.hashedRefreshToken)
      throw new NotFoundException('User not found');

    const rt_match = await compare(refresh_token, user.hashedRefreshToken);
    if (!rt_match) throw new UnauthorizedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  //HELP FUNCTIONS

  async updateRtHash(userId: string, refresh_token: string) {
    const hash = await this.hashData(refresh_token);

    await this.userService.update(userId, {
      hashedRefreshToken: hash
    });
  }

  hashData(data: string) {
    return hash(data, 10);
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email
        },
        {
          secret: this.configService.get('JWT_ACCESS_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRES_IN')
        }
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email
        },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRES_IN')
        }
      )
    ]);

    return {
      refresh_token,
      access_token
    };
  }
}
