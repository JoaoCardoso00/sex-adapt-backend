import { UserEntity } from '@user/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: UserEntity) {
    return await this.mailerService.sendMail({
      to: user.email,
      subject: 'teste',
      template: 'baseEmail.hbs',
      context: {
        name: user.name
      }
    });
  }

  async mailRecoverToken(email: string, token: number){
    return await this.mailerService.sendMail({
      to: email,
      subject: 'Recuperação de senha',
      template: 'baseEmail.hbs',
      context: {
        token
      }
    })
  }
}
