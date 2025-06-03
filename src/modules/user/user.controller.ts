import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly UserService: UserService, 
        private readonly authService: AuthService) 
        {
        }
    @Get()
        index(@Query() query: any) {
            return{
                keyword: query.keyword,
                category: query.category,
            };
        // return [this.UserService.getUsers(), this.authService.login()];
    }
    @Get('/:id')
        find(@Param('id')id: string){
            return `user with id ${id}`;
        }
    
    @Post()
        crreat(@Body() body: any) {
        return body; 
    }
    @Delete()
        delete() {
        return 'delete user';
    }
}
