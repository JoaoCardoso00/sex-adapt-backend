import { AccessibilityEntity } from './../../accessibility/entities/accessibility.entity';
import { BeforeInsert, Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';
import { hashSync } from 'bcrypt';
import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@OneToOne(() => AccessibilityEntity, (accesibilities) => accesibilities.user, { cascade: true })
	accessibilities: IAccessibilityEntity;

	@Column({ nullable: true })
	hashedRefreshToken?: string;

	@BeforeInsert()
	hashPassword() {
		this.password = hashSync(this.password, 10);
	}
}
