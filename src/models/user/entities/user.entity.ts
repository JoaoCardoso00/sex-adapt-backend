/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryColumn({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  photo_path: string;

  @Column()
  needStair: boolean;

  @Column()
  needBar: boolean;

  @Column()
  needBraille: boolean;

  @Column()
  needLibra: boolean;

  @Column()
  needTactilFlooring: boolean;

  @Column()
  unevenness: boolean;

  @Column()
  incompatible: boolean;

  @Column()
  visited: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
