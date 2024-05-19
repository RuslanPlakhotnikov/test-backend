import {User} from "../entities/user";


export class GetUserDto {
  email: string;
  id: string;
  fullName: string;
  createdAt: Date | string;

  static from(user: User) {
    const dto = new GetUserDto();
    dto.email = user.email;
    dto.id = user.id;
    dto.createdAt = user.createdAt;
    dto.fullName = user.fullName;
    return dto;
  }
}