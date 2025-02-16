import { IsString, IsEmail} from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    gender: string;

    @IsString()
    phone: string;
}
