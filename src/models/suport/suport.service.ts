import { MailService } from './../../services/mail/mail.service';
import { CreateSuportDto } from './dto/create-suport.dto';
import { SuportEntity } from '@models/suport/entities/suport.entity';
import { UserEntity } from '@user/entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SuportService {
  constructor(
    @InjectRepository(SuportEntity)
    private suportRepository: Repository<SuportEntity>,
    private readonly mailService: MailService
  ) { }

  async create(userId: string, message: string) {
    try {

      const suport = this.suportRepository.create({
        user: userId as unknown as UserEntity,
        message
      });
      await this.suportRepository.save(suport);
      await this.mailService.sendSuportMail({ subject: 'Suporte', title: 'Erro', subtitle: '', content: message })
      return suport;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.suportRepository.find({
      relations: {
        user: true
      },
      select: {
        user: {
          id: true,
          email: true,
          name: true
        }
      }
    });
  }

  async findOneOrFail(options: FindOneOptions<SuportEntity>) {
    try {
      return await this.suportRepository.findOneOrFail({
        ...options,
        relations: {
          user: true
        },
        select: {
          user: {
            id: true,
            email: true,
            name: true
          }
        }
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string) {
    await this.findOneOrFail({
      where: { id }
    });
    await this.suportRepository.delete({ id });
    return;
  }
}
