import { Request, Response, NextFunction } from "express";
// API anahtarlarını kontrol eden servis

export const verifyApiKey = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const apiKey = req.headers["apiKey"] as string || req.body.apiKey;

        if (!apiKey) {
            res.status(401).json({ message: "API key eksik" });
            return;
        }
        return next(); // API anahtarı geçerliyse isteği devam ettir
    } catch (error) {
        next(error);
    }
};  
