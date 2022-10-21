import { StatusType } from './../interfaces/status.type';
import { UserEntity } from '@user/entities/user.entity';
import { generateRandomDigits } from './../../../utils/generateRandomDigits.util';
import { IRecoverPassword } from './../interfaces/recover-password.interface';
import { BaseEntity } from '@models/base';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: "recovers" })
export class RecoverPasswordEntity extends BaseEntity implements IRecoverPassword {
    @OneToOne(() => UserEntity, (user) => user.recoverPassword, { onDelete: 'CASCADE' })
    user: UserEntity

    @Column({ default: () => generateRandomDigits(0, 9999999), insert: false })
    token: number

    @Column()
    email: string

    @Column({ default: "PENDING", insert: false })
    status: StatusType
}