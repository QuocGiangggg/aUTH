import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { DatabaseService } from 'src/db/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entities';

@Module({
  controllers: [UserController],
  providers: [UserService,AuthService,DatabaseService],
  exports:[UserService],
  imports:[TypeOrmModule.forFeature([User])] // Specify your entities here
})
export class UserModule {}
