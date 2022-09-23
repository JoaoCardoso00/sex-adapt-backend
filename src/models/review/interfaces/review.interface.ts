import { IUserEntity } from './../../../../dist/models/user/interfaces/user.interface.d';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';

export interface IReviewEntity extends IBaseEntity {
    user: IUserEntity;
    // establishmentId: string
    grade: number;
    comment: string;
}