import { AppDataSource } from '../config/Database';
import { User } from '../database/entities/User';

export const UserRepository = AppDataSource.getRepository(User);
