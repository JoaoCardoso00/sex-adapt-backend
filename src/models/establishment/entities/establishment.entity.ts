import { AccessibilityEntity } from '@models/accessibility/entities/accessibility.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { IEstablishmentEntity } from '../interfaces/establishment.interface';

@Entity({ name: "establishments" })
export class EstablishmentEntity
  extends BaseEntity
  implements IEstablishmentEntity {
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

  @Column({ type: 'float' })
  price: number;

  @Column()
  category: string;

  @Column({ default: "" })
  website?: string;

  @Column({ default: "" })
  address?: string;

  @Column()
  ground_floor_room: boolean;

  // @Column()
  // latitude: number;

  // @Column()
  // longitude: number;

  @Column({ default: "" })
  cover_photo?: string;

  @Column("text", { array: true, default: [] })
  room_photo?: string[];

  @Column()
  landline: string;

  @Column({ default: "" })
  whatsapp?: string;
}
