import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {RegisterUserDto} from "./dtos/register-user.dto";
import {GetUserDto} from "./dtos/get-user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  createUser(@Body() dto: RegisterUserDto) {
    return this.userService.createUser(dto)
  }

  @Get(":id")
  async getUser(@Param("id") id: string) {
    const user = await this.userService.getUserById(id);
    return GetUserDto.from(user)
  }
}
