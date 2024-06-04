import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { mailerConfig } from 'src/common/configs/mailer.config';

@Module({
  imports: [MailerModule.forRoot(mailerConfig)],
})
export class MailModule {}
