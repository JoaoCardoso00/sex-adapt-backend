import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MinLength
} from 'class-validator';

export class CreateUserDto {
	@IsEmail()
	email: string;

	@MinLength(8)
	@IsString()
	@IsNotEmpty()
	@Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
		message: 'passaword is too weak'
	})
	password: string;

	@IsString()
	@IsNotEmpty()
	name: string;

	hashedRefreshToken: string | null;
}
