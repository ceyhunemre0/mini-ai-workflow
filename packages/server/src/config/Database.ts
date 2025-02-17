import { DataSource } from 'typeorm';
import { User } from '../database/entities/User';
import { CreateUserTable1616500000000 } from '../database/migrations/CreateUserTable';
import dotenv from 'dotenv';

dotenv.config();

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
    migrations: [CreateUserTable1616500000000]
});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize().then(async () => {
            console.log("Veritabanı bağlantısı başarılı.");
            // Migration'ları çalıştırıyoruz
            if(process.env.NODE_ENV === 'development') {
                await AppDataSource.runMigrations();
            }
            console.log("Migration'lar başarıyla çalıştırıldı.");
        });
        
    } catch (error) {
        console.error('❌ PostgreSQL bağlantısı başarısız:', error);
    }
};
