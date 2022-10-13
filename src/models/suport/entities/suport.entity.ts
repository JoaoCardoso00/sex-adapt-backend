import { UserEntity } from '@models/user/entities/user.entity';
import { ManyToOne } from 'typeorm';
import { ISuportEntity } from '../interfaces/suport.interface';
import { BaseEntity } from './../../base/entities/base-entity.entity';

export class SuportEntity extends BaseEntity implements ISuportEntity {
    @ManyToOne(() => UserEntity, (user) => user.suports, { onDelete: 'CASCADE' })    
    user: UserEntity;
    message: string
}
