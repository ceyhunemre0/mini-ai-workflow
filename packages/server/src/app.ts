import express from 'express';
import cors from 'cors';
import { connectDB } from './config/Database';  // connectDB fonksiyonunu import ediyoruz
import authRoutes from './routes/AuthRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Veritabanı bağlantısını başlatıyoruz
connectDB()
    .then(() => {
        // Veritabanı bağlantısı başarılı olduktan sonra API'yı başlatıyoruz
        app.use('/api/auth', authRoutes);
    })
    .catch((err) => {
        console.error("Bağlantı hatası:", err);
    });

export default app;
