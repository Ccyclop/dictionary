import { DatabaseConfigInterface } from './interfaces/database-config.interface';
import * as process from 'node:process';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: DatabaseConfigInterface = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: process.env.MIGRATION_RUN === 'true',
}