import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import Product from './entities/products';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';
import { RoleMiddleware } from './middleware/role/role.middleware';
import { UsersModule } from './modules/users/users.module';
import { user } from './entities/user';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [Product,user],
      synchronize: true, // Note: set to false in production
    }),
    ProductsModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer,RoleMiddleware) {
  //  consumer
  //  .apply(LoggingMiddleware)
  //  .forRoutes(
  //   {
  //   path: '/products/*',
  //   method:RequestMethod.ALL,
  //  },
  //  {
  //   path: '/products',
  //   method: RequestMethod.ALL,
  //  },
  // );
  // consumer.apply(RoleMiddleware).forRoutes('*');

  // }
}
