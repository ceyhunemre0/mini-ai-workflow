import { Request, Response, RequestHandler } from 'express';
import { AuthService } from '../services/AuthServices';

export class AuthController {
    static register: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
    };

    static login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const token = await AuthService.validateUser(email, password);

            if (!token) {
                res.status(400).json({ message: "Geçersiz email veya şifre" });
                return;
            }

            res.status(201).json({ message: "Giriş başarılı", token });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Bilinmeyen bir hata oluştu' });
            }
        }
    };
}
