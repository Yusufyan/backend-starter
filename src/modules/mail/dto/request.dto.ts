import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ActivationDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  token: string;
}
