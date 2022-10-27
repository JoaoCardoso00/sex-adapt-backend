import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';
export interface IUserEntity extends IBaseEntity {
	email: string;
	password: string;
	name: string;
	hashedRefreshToken?: string | null;
	accessibilities: IAccessibilityEntity;
}
