import { Column, Entity } from 'typeorm';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;
}
