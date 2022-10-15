import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendTestMail() {
    return this.mailerService.sendMail({
      to: '',
      subject: 'teste',
      template: 'baseEmail.hbs'
    });
  }
}
