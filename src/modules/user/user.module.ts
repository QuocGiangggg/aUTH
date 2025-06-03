import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { DatabaseService } from 'src/db/database.service';

@Module({
  controllers: [UserController],
  providers: [UserService,AuthService,DatabaseService],
  exports:[UserService],
})
export class UserModule {}
