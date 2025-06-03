import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  findAll(){
    return 'This action returns all records from the database';
  }
}
