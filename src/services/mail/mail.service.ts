import { UserEntity } from '@user/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { BaseEmail } from './@types/base-email.type';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: UserEntity, email: BaseEmail) {
    return this.mailerService.sendMail({
      to: user.email,
      subject: email.subject,
      template: 'baseEmail.hbs',
      context: {...email}
    });
  }

  async sendSuportMail(email: BaseEmail) {
    return this.mailerService.sendMail({
      to: 'fabinhoneves09@gmail.com',
      subject: email.subject,
      template: 'baseEmail.hbs',
      context: {...email}
    });
  }
}
