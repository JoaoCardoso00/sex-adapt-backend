import { HttpCustomMessages } from 'src/common/helpers/exceptions/messages/index.messages';
import { HttpException, HttpStatus } from '@nestjs/common';

export class RecoverInProgressException extends HttpException {
  constructor() {
    super(HttpCustomMessages.RECOVER.IN_PROGRESS, HttpStatus.FORBIDDEN);
  }
}
