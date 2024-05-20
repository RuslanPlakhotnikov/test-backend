import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: "test-secret-key",
      signOptions: { expiresIn: '999999999999999999999999999999999999999999999999s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
