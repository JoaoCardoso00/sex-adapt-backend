import { AccessibilityEntity } from './../../models/accessibility/entities/accessibility.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccessibilityEntity])],
  providers: [AccessibilityService]
})
export class AccessibilityModule {}
