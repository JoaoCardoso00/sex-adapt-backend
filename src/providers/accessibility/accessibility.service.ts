import { CreateAccessibilityDto } from './../../models/accessibility/dto/create-accessibility.dto';
import { AccessibilityEntity } from './../../models/accessibility/entities/accessibility.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccessibilityService {
  constructor(
    @InjectRepository(AccessibilityEntity)
    private readonly accessibilityRepository: Repository<AccessibilityEntity>
  ) {}

  async create(accessibilities: CreateAccessibilityDto) {
    const accessibility = this.accessibilityRepository.create(accessibilities);
    return await this.accessibilityRepository.save(accessibility);
  }
}
