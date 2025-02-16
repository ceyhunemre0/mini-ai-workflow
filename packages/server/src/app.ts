import express from 'express';
import cors from 'cors';
import { connectDB } from './config/Database';
import authRoutes from './routes/AuthRoutes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
    res.send('Merhaba');
});

app.use('/api/auth', authRoutes);

export default app;