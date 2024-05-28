import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { PassportModule } from '@nestjs/passport';
import { TokenModule } from './modules/token/token.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
    RoleModule,
    PermissionModule,
    UserModule,
    CommandModule,
    TokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
