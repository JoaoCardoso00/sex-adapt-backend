import { UserEntity } from '@user/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: UserEntity) {
    return this.mailerService.sendMail({
      to: user.email,
      subject: 'teste',
      template: 'baseEmail.hbs',
      context: {
        name: user.name
      }
    });
  }
}
