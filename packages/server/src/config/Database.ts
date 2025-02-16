import { DataSource } from 'typeorm';
import { User } from '../database/entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('✅ PostgreSQL bağlantısı başarılı!');
    } catch (error) {
        console.error('❌ PostgreSQL bağlantısı başarısız:', error);
    }
};
