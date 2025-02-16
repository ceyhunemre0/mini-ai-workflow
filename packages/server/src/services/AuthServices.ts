import { UserRepository } from '../repositories/UserRepository';
import { User } from '../database/entities/User';
import bcrypt from 'bcrypt';

export class AuthService {
    static async register(email: string, password: string): Promise<User | null> {
        const existingUser = await UserRepository.findOneBy({ email });
        if (existingUser) {
            throw new Error('Bu email zaten kullanılıyor.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = UserRepository.create({ email, password: hashedPassword });

        return await UserRepository.save(newUser);
    }

    static async validateUser(email: string, password: string): Promise<boolean> {
        const user = await UserRepository.findOneBy({ email });
        if (!user) return false;

        return await bcrypt.compare(password, user.password);
    }
}
