import { AccessibilityEntity } from './../../accessibility/entities/accessibility.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne
} from 'typeorm';
import { ReviewEntity } from './../../review/entities/review.entity';
import { hash } from 'argon2';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';
import { SuportEntity } from '@models/suport/entities/suport.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToOne(
    () => AccessibilityEntity,
    (accessibilities) => accessibilities.user,
    {
      cascade: true
    }
  )
  @JoinColumn({ name: 'accessibility_id' })
  accessibilities: AccessibilityEntity;

  @OneToMany(() => ReviewEntity, (review) => review.user, { cascade: true })
  @JoinColumn({ name: 'review_id' })
  reviews: ReviewEntity[];

  @OneToMany(() => SuportEntity, (suport) => suport.user, { cascade: true })
  @JoinColumn({ name: 'suport_id' })
  suports: SuportEntity[];

  @Column({ nullable: true })
  hashedRefreshToken: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password);
  }

  @BeforeUpdate()
  async updatePassword() {
    this.password = await hash(this.password);
  }
}
