import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  database_url: process.env.DATABASE_URL,
};
