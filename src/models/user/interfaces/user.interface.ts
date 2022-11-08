import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';
import { ISuportEntity } from './../../suport/interfaces/suport.interface';
import { IReviewEntity } from '@review/interfaces/review.interface';

export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  name: string;
  hashedRefreshToken?: string | null;
  reviews: IReviewEntity[];
  accessibilities: IAccessibilityEntity;
  suports: ISuportEntity[];
}
