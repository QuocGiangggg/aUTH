import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';
import { LocalStrategy } from 'src/passport/local.strategy';
import { JwtStrategy } from 'src/passport/jwt.straegy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  imports:  [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'asdewctuvfj23d25bhervtg46g746u4w63451v34cte',
      signOptions: { expiresIn: '1h'},
    }),
  ],

})
export class AuthModule {}
