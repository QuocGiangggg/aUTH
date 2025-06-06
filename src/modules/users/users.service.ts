import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/entities/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(user)
        private readonly userRepository: Repository<user>,
    ){}
     async createUser(userData: Partial<user>): Promise<user> {
        const user = this.userRepository.create(userData);
        user.created_at = new Date();
        user.update_at = new Date();
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        user.password = hashedPassword;
        return this.userRepository.save(user);
    }
    findByEmail(email: string){
        const user = this.userRepository.findOneBy({ email });
        return user;
    }
    

    async validateUser(email: string, password: string){
        const user = await this.findByEmail(email);
        if(!user){
            return null;
        }
        const status = await bcrypt.compareSync(password, user.password);
        if(user){
            return user;
        }
        return null;

    }
    
}
