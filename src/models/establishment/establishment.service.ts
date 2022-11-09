import { AccessibilityEntity } from '@models/accessibility/entities/accessibility.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { EstablishmentEntity } from './entities/establishment.entity';
import { HttpCustomMessages } from '../../common/helpers/exceptions/messages/index.messages';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(EstablishmentEntity)
    private establishmentRepository: Repository<EstablishmentEntity>,
    @InjectRepository(AccessibilityEntity)
    private accessibilityRepository: Repository<AccessibilityEntity>
  ) { }

  async create(createEstablishmentDto: CreateEstablishmentDto) {
    const establishment = this.establishmentRepository.create(createEstablishmentDto);
    const accessibility = this.accessibilityRepository.create(
      {...createEstablishmentDto.accessibilities, establishment: establishment}
    );
    establishment.accessibilities = accessibility;
    await this.accessibilityRepository.save(accessibility);
    return await this.establishmentRepository.save(establishment);
  }

  async findAll() {
    return await this.establishmentRepository.find({
      relations: ['accessibilities'],
    });
  }

  async findOneOrFail(options: FindOneOptions<EstablishmentEntity>) {
    try {
      return await this.establishmentRepository.findOneOrFail({
        ...options,
        relations: ['accessibilities'],
        select: {
          accessibilities: {
            bar: true,
            braille: true,
            elevator: true,
            incompatible_dimensions: true,
            sign_language: true,
            tactile_floor: true,
            uneeveness: true
          }
        }
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateEstablishmentDto: UpdateEstablishmentDto) {
    const establishment = await this.findOneOrFail({ where: { id } });
    this.establishmentRepository.merge(establishment, updateEstablishmentDto);
    return await this.establishmentRepository.save(establishment);
  }

  async remove(id: string) {
    return await this.establishmentRepository.delete({ id });
  }
}
