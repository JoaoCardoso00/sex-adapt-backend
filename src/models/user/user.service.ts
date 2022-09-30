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
		private usersRepository: Repository<UserEntity>
	) { }

	async create(createUserDto: CreateUserDto) {
		const user = this.usersRepository.create(createUserDto);
		return await this.usersRepository.save(user);
	}

	async findAll() {
		return await this.usersRepository.find({
			relations: ['reviews'],
			select: {
				email: true,
				id: true,
				name: true,
				reviews: {
					comment: true,
					grade: true,
					id: true
				}
			}
		});
	}

	async findOneById(id: string) {
		return await this.usersRepository.findOneBy({ id });
	}

	async findOneByEmail(email: string) {
		return await this.usersRepository.findOne({
			where: {
				email
			},
			relations: ['reviews']
		});
	}

	async findOneOrFail(options: FindOneOptions<UserEntity>) {
		try {
			return await this.usersRepository.findOneOrFail({
				...options,
				relations: ['reviews'],
			});
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
