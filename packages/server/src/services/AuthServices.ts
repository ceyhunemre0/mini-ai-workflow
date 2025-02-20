import { UserRepository } from '../repositories/UserRepository';
import { User } from '../database/entities/User';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

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

    static async validateUser(email: string, password: string): Promise<string | null> {
        const user = await UserRepository.findOneBy({ email });
        if (!user) return null;

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;


        // Kullanıcı doğrulandı, JWT token üret
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );
        return token;
    }
}
