import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { identity } from 'rxjs';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService, 
        private readonly authService: AuthService) 
        {
        }
    @Get()
        index() {
            return this.userService.findAll();
        
        // return [this.UserService.getUsers(), this.authService.login()];
    }
    
    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
    
    @Post()
        create(@Body() body: any) {
        return this.userService.create(body);
    }

    @Patch('/:id')
     update(@Param('id') id: string, @Body() body: any ){
        return this.userService.update(+id, body)
     }

    @Delete('/:id')
        delete(@Param('id') id: string) {
            return this.userService.delete(+id)
       
    }
}
