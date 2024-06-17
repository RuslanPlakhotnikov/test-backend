import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {PasswordEncryptor} from "../../utils/password-encryptor";
import {LoginDto} from "./dtos/login.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(dto: LoginDto): Promise<any> {
    const user = await this.userService.getUserByEmail(dto.email);
    const isValid = await PasswordEncryptor.validatePasswordAsync(dto.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedException(`Invalid email or password.`);
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
