import {Body, Controller, Get, Param, Post, UseGuards, Request, ParseUUIDPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {RegisterUserDto} from "./dtos/register-user.dto";
import {GetUserDto} from "./dtos/get-user.dto";
import {AuthGuard} from "../auth/guards/auth.guard";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  createUser(@Body() dto: RegisterUserDto) {
    return this.userService.createUser(dto)
  }

  @UseGuards(AuthGuard)
  @Get("me")
  async getMe(@Request() req: any) {
    const user = await this.userService.getUserById(req.user.sub);
    return GetUserDto.from(user)
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async getUser(@Param("id", new ParseUUIDPipe()) id: string) {
    const user = await this.userService.getUserById(id);
    return GetUserDto.from(user)
  }
}
