import { IBaseEntity } from '@base/interfaces/base-entity.interface';
import { IUserEntity } from '@models/user/interfaces';
import { StatusType } from './status.type';

export interface IRecoverPassword extends IBaseEntity{
    user: IUserEntity
    token: number
    email: string
    status: StatusType
}