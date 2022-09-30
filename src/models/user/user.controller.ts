import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseUUIDPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/common/decorators';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@Public()
	async create(@Body() createUserDto: CreateUserDto) {
		return await this.userService.create(createUserDto);
	}

	@Get()
	async findAll() {
		return await this.userService.findAll();
	}

	@Get('/findById/:id')
	findOneById(@Param('id', ParseUUIDPipe) id: string) {
		return this.userService.findOneById(id);
	}

	@Get('/findByEmail/:email')
	findOneByEmail(@Param('email') email: string) {
		return this.userService.findOneByEmail(email);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto);
	}

	@Delete('/deleteByEmail/:email')
	@Public()
	removeByEmail(@Param('email') email: string) {
		return this.userService.removeByEmail(email);
	}

	@Delete('/deleteById/:id')
	removeById(@Param('id') id: string) {
		return this.userService.removeById(id);
	}
}
