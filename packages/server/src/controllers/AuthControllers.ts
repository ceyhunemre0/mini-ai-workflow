import { Request, Response } from 'express';
import { AuthService } from '../services/AuthServices';

export class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await AuthService.register(email, password);
            res.status(201).json({ message: 'Kullanıcı oluşturuldu', user });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Bilinmeyen bir hata oluştu' });
            }
        }
    }
}