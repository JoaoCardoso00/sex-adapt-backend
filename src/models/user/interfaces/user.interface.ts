import { ISuportEntity } from './../../suport/interfaces/suport.interface';
import { IReviewEntity } from '@review/interfaces/review.interface';
import { IBaseEntity } from '@base/interfaces/base-entity.interface';
export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  name: string;
  reviews: IReviewEntity[];
  suports: ISuportEntity[];
  hashedRefreshToken: string;
}

//FAVORITES && ACCESSIBILITIES NOT YET IMPLEMENTED
