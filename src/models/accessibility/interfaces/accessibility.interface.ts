import { IBaseEntity } from '@models/base/interfaces/base-entity.interface';
import { IUserEntity } from '@models/user/interfaces';

export interface IAccessibilityEntity extends IBaseEntity {
  user: IUserEntity;
  // establishment: string | null;
  elevator: boolean;
  bar: boolean;
  uneeveness: boolean;
  incompatible_dimensions: boolean;
  sign_language: boolean;
  tactile_floor: boolean;
  braille: boolean;
}
