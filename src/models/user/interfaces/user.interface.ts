export interface IUser {
  email: string;
  name: string;
  password: string;
  photo_path: string;
  needStair: boolean;
  needBar: boolean;
  needBraille: boolean;
  needLibra: boolean;
  needTactilFlooring: boolean;
  unevenness: boolean;
  incompatible: boolean;
  visited: number;

  createdAt: Date;
}
