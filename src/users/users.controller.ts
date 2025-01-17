import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAllUsers(){
        return this.userService.findAll();
    }

    @Get(':id')
    findUser(@Param('id') id:String){
        console.log('im here 1');
        return this.userService.findUser(id);
    }



}
