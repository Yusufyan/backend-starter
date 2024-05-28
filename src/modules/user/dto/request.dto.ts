import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}

export class UpdateUserDTO {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  role: string;
}

export class LoginUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class GetUserDTO {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  id: string;
}
