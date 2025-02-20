import { Router } from "express";
import { ChatController } from "../controllers/ChatController";
import { verifyApiKey } from "../middlewares/VerifyApiKey";

const router = Router();

router.post("/ask", verifyApiKey, ChatController.askAI);

export default router;
