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
  need_ramp: boolean;

  @Column()
  need_bar: boolean;

  @Column()
  need_braille: boolean;

  @Column()
  need_libra: boolean;

  @Column()
  need_tactile_floor: boolean;

  @Column()
  affected_by_unevenness: boolean;

  @Column({ default: 0 })
  establishments_visited: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
