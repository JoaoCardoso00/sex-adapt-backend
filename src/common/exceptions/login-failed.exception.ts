import { HttpCustomMessages } from './../helpers/exceptions/messages/index.messages';
import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginFailedException extends HttpException {
<<<<<<< HEAD
  constructor() {
    super(HttpCustomMessages.LOGIN_FAILED, HttpStatus.UNAUTHORIZED);
  }
=======
	constructor() {
		super(HttpCustomMessages.LOGIN_FAILED, HttpStatus.UNAUTHORIZED);
	}
>>>>>>> fix/config
}
