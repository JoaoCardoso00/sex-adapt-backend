import { AccessibilityEntity } from '@models/accessibility/entities/accessibility.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { IEstablishmentEntity } from '../interfaces/establishment.interface';

export class EstablishmentEntity
  extends BaseEntity
  implements IEstablishmentEntity
{
  @OneToOne(
    () => AccessibilityEntity,
    (accessibilities) => accessibilities.establishment,
    {
      cascade: true
    }
  )
  @JoinColumn({ name: 'accessibility_id' })
  accessibilities: AccessibilityEntity;

  @Column()
  name: string;

  @Column({ type: 'double' })
  price: number;

  @Column()
  category: string;

  @Column()
  website: string;

  @Column()
  address: string;

  @Column()
  ground_floor_room: boolean;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  cover_photo: string;

  @Column()
  room_photo: string[];

  @Column()
  landline: number;

  @Column()
  whatsapp: string;
}
