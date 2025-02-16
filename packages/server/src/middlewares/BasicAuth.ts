import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthServices';

export const basicAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Basic ')) {
            res.status(401).json({ message: 'Yetkilendirme bilgisi eksik' });
            return;
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [email, password] = credentials.split(':');

        const isValidUser = await AuthService.validateUser(email, password);

        if (!isValidUser) {
            res.status(401).json({ message: 'Geçersiz kimlik bilgileri' });
            return;
        }

        return next();
    } catch (error) {
        next(error);
    }
};