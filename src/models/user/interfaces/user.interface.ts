export interface IUser {
  email: string;
  name: string;
  password: string;
  photo_path: string;
  need_ramp: boolean;
  need_bar: boolean;
  need_braille: boolean;
  need_libra: boolean;
  need_tactile_floor: boolean;
  affected_by_unevenness: boolean;
  establishments_visited: number;

  createdAt: Date;
}
