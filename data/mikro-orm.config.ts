import { LoadStrategy } from "@mikro-orm/core";
import { join } from "path";
import { defineConfig } from "@mikro-orm/postgresql";
import { Migrator } from "@mikro-orm/migrations";
import {User} from "../src/user/entities/user";

module.exports = new Promise(async resolve => {
  resolve(defineConfig({
    entities: [
      User
    ],
    extensions: [Migrator],
    dbName: "test-back",
    password: "root",
    user: "root",
    host: "localhost",
    port: 5460,
    pool: {
      max: 50
    },
    loadStrategy: LoadStrategy.JOINED,
    migrations: {
      tableName: "migrations",
      path: join(__dirname, "migrations"),
      // pattern: /^[\w-]+\d+\.[tj]s$/,
      transactional: true,
      allOrNothing: true,
      safe: false,
      emit: "ts"
    }
  }));
});
