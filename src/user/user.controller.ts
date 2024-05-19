import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {RegisterUserDto} from "./dtos/register-user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  createUser(@Body() dto: RegisterUserDto) {
    return this.userService.createUser(dto)
  }
}
