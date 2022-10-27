import { IBaseEntity } from '@models/base/interfaces/base-entity.interface';

export interface IAccessibilityEntity extends IBaseEntity {
	user: string | null;
	// establishment: string | null;
	elevator: boolean;
	bar: boolean;
	uneeveness: boolean;
	incompatible_dimensions: boolean;
	sign_language: boolean;
	tactile_floor: boolean;
	braille: boolean;
}
