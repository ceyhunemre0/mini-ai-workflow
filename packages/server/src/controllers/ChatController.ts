import { Request, Response } from "express";
import { LangChainService } from "../services/LangchainServices";

export class ChatController {
  static async askAI(req: Request, res: Response): Promise<void> {
    try {
      const { apiKey, userInput } = req.body;

      if (!userInput) {
        res.status(400).json({ error: "Kullanıcı girdisi eksik." });
        return;
      }

      const response = await LangChainService.askOpenAI(apiKey, userInput);
      res.json({ response });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Bilinmeyen bir hata oluştu." });
      }
    }
  }
}
