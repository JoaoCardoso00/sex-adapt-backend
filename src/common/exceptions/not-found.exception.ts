import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
<<<<<<< HEAD
  constructor(error: string) {
    super(error, HttpStatus.NOT_FOUND);
  }
=======
	constructor(error: string) {
		super(error, HttpStatus.NOT_FOUND);
	}
>>>>>>> fix/config
}
