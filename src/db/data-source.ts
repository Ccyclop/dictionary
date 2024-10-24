import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from '../config/config';

export const AppDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  ...databaseConfig,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}']
};

const AppDataSource = new DataSource(AppDataSourceOptions);
export default AppDataSource;


