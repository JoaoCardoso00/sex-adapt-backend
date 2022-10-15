import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  constructor(private configService: ConfigService) { }
  
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    return {
      transport: {
        host: this.configService.get('MAILER_HOST'),
        port: this.configService.get('MAILER_PORT'),
        secure: false,
        auth: {
          user: this.configService.get('MAILER_USER'),
          pass: this.configService.get('MAILER_PASSWORD')
        }
      },
      defaults: {
        from: '"Fabio Neves" <fabinhoneves09@gmail.com>'
      },
      template: {
        dir: join(__dirname, '**', '**', 'template'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    }
  };
}
