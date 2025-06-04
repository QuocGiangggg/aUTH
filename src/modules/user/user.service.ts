import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseService } from 'src/db/database.service';
import { User } from './user.entities';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    findOne(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }
    create(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        user.createdAt = new Date();
        user.updatedAt = new Date();
        return this.userRepository.save(user);
    }
    async update(id: number, userData: Partial<User>): Promise<User | null>{
        userData.updatedAt = new Date();
        await this.userRepository.update(id,userData);
        return this.findOne(id);
    }
    async delete(id: number){
        const user = await this.userRepository.findOneBy({id});
        await this.userRepository.delete(id);
        return user;
    }

}
