import { BaseEntity } from '@models/base/entities/base-entity.entity';
import { UserEntity } from '@models/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { IAccessibilityEntity } from '../interfaces/accessibility.interface';

@Entity({ name: 'accessibilities' })
export class AccessibilityEntity
  extends BaseEntity
  implements IAccessibilityEntity
{
  @OneToOne(() => UserEntity, (user) => user.accessibilities, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  // @OneToOne(() => EstablishmentEntity, (establishment) => establishment.accessibilities, { onDelete: 'CASCADE' })
  // establishmentId: string | null;

  @Column()
  elevator: boolean;
  @Column()
  bar: boolean;
  @Column()
  uneeveness: boolean;
  @Column()
  incompatible_dimensions: boolean;
  @Column()
  sign_language: boolean;
  @Column()
  tactile_floor: boolean;
  @Column()
  braille: boolean;
}
