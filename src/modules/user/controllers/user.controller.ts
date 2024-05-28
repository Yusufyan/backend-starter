import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserCrudApplication } from '../applications/user-crud.application';
import {
  CreateUserDTO,
  GetUserDTO,
  LoginUserDTO,
  UpdateUserDTO,
} from '../dto/request.dto';
import { IApiResponse } from 'src/interfaces/response-template.interface';
import { Request, Response } from 'express';
import { CreateTokenDTO } from 'src/modules/token/dtos/request.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles.guard';
import { Permissions } from 'src/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly crudApplication: UserCrudApplication) {}

  @Post('/register')
  async create(@Body() body: CreateUserDTO): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.create(body);

    return {
      message: 'Success.',
      data: response,
    };
  }

  @Post('/login')
  async authenticate(
    @Body() body: LoginUserDTO,
    token: CreateTokenDTO,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.authenticate(
      body,
      token,
      req,
      res,
    );

    return {
      message: 'Success.',
      data: response,
    };
  }

  @Get('/refresh-token')
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.refreshToken(req, res);

    return {
      message: 'Success',
      data: response,
    };
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('WRITE_USER')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.update(id, body);

    return {
      message: 'Success',
      data: response,
    };
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('READ_USER')
  async getAll(
    @Param('id') id: string,
    @Req() req: Request,
  ): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.getUserAll(req);

    return {
      message: 'Success',
      data: response,
    };
  }

  @Get('/details')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('READ_USER')
  async getDetails(@Query() body: GetUserDTO): Promise<IApiResponse<any>> {
    const response = await this.crudApplication.getUserDetail(body);

    return {
      message: 'Success',
      data: response,
    };
  }
}
