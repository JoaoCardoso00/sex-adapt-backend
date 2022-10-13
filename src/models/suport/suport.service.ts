import { Injectable } from '@nestjs/common';
import { CreateSuportDto } from './dto/create-suport.dto';
import { UpdateSuportDto } from './dto/update-suport.dto';

@Injectable()
export class SuportService {
	create(createSuportDto: CreateSuportDto) {
		return 'This action adds a new suport';
	}

	findAll() {
		return `This action returns all suport`;
	}

	findOne(id: number) {
		return `This action returns a #${id} suport`;
	}

	update(id: number, updateSuportDto: UpdateSuportDto) {
		return `This action updates a #${id} suport`;
	}

	remove(id: number) {
		return `This action removes a #${id} suport`;
	}
}
