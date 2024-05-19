import * as bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export class PasswordEncryptor {
  static async cryptPasswordAsync(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return bcrypt.hash(password, salt);
  }

  static async validatePasswordAsync(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
