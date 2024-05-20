import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { User } from "./user/entities/user";
import { AuthModule } from './auth/auth.module';
import * as mikroOrmConfig from "../data/mikro-orm.config";

@Module({
  imports: [
    UserModule,
    MikroOrmModule.forRootAsync({
      useFactory: () => mikroOrmConfig
    } as any),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
