import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { EstablishmentModule } from '../../models/establishment/establishment.module';
import { SuggestionService } from './suggestion.service';

@Module({
  imports: [EstablishmentModule, UserModule],
  controllers: [],
  providers: [SuggestionService],
  exports: [SuggestionService]
})
export class SuggestionModule {}
