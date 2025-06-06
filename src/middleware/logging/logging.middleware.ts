import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { request } from 'http';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    let isAuth = true;
    if(!isAuth){
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Unauthorized',
      });
    }
    console.log(req.url);
    req.user = "Hoàng An";
    next();
  }
}
