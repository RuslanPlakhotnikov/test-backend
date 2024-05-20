import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "./dtos/login.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  signIn(@Body() dto: LoginDto) {
    return this.authService.signIn(dto);
  }
}
