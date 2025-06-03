import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
// import { UserService } from '../user/user.service';
// import { DatabaseService } from 'src/db/database.service';

@Module({
  controllers: [AuthController],
  // providers: [UserService, DatabaseService],
  imports: [UserModule],
})
export class AuthModule {}
