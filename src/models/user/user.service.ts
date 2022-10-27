import { AccessibilityEntity } from './../accessibility/entities/accessibility.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(AccessibilityEntity)
    private accessibilityRepository: Repository<AccessibilityEntity>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    const accessibility = this.accessibilityRepository.create(
      createUserDto.accessibilities
    );
    user.accessibilities = accessibility;
    accessibility.user = user;
    await this.accessibilityRepository.save(accessibility);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: ['accessibilities'],
      select: ['email', 'id', 'name']
    });
  }

  async findOneById(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email
      }
    });
  }

  async findOneOrFail(options: FindOneOptions<UserEntity>) {
    try {
      return await this.usersRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOneOrFail({ where: { id } });
    this.usersRepository.merge(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async removeById(id: string) {
    return await this.usersRepository.delete({ id });
  }

  async removeByEmail(email: string) {
    return await this.usersRepository.delete({ email });
  }
}
