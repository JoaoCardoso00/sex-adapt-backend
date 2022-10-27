import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
import { IReviewEntity } from '@models/review/interfaces/review.interface';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';
export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  name: string;
  hashedRefreshToken?: string | null;
  reviews: IReviewEntity[];
  accessibilities: IAccessibilityEntity;
}
