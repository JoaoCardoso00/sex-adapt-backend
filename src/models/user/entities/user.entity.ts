import { ReviewEntity } from './../../review/entities/review.entity';
import { hash } from 'argon2';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany } from 'typeorm';
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
}
