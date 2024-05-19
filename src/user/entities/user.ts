import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User {
  @PrimaryKey({ type: "uuid" })
  id: string = uuidv4()

  @Property()
  email: string

  @Property()
  passwordHash: string

  @Property({ nullable: true })
  fullName: string

  @Property({ columnType: "timestamp", defaultRaw: "now()" })
  createdAt: Date = new Date()
}