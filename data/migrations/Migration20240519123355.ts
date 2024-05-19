import { Migration } from '@mikro-orm/migrations';

export class Migration20240519123355 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" uuid not null, "email" varchar(255) not null, "password_hash" varchar(255) not null, "full_name" varchar(255) null, "created_at" timestamp not null default now(), constraint "user_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
