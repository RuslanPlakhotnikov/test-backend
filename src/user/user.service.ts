import {Injectable} from '@nestjs/common';
import {RegisterUserDto} from "./dtos/register-user.dto";
import {GetUserDto} from "./dtos/get-user.dto";
import {EntityManager} from "@mikro-orm/core";
import {User} from "./entities/user";
import {PasswordEncryptor} from "../../utils/password-encryptor";

@Injectable()
export class UserService {
  constructor(private readonly _em: EntityManager) {}

  async createUser(dto: RegisterUserDto): Promise<GetUserDto> {
    const user = new User();
    user.email = dto.email;
    user.passwordHash = await PasswordEncryptor.cryptPasswordAsync(dto.password);

    // way 1
    // this._em.persist(user)
    // await this._em.flush()

    //way 2
    await this._em.persistAndFlush(user);

    return GetUserDto.from(user);
  }
}
