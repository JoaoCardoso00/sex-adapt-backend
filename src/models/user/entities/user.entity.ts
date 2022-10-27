import { AccessibilityEntity } from './../../accessibility/entities/accessibility.entity';
import { BeforeInsert, Column, Entity, JoinColumn, JoinTable, OneToOne } from 'typeorm';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';
import { hashSync } from 'bcrypt';
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

  @Column({ nullable: true })
  hashedRefreshToken?: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
