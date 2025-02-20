import { ChatOpenAI } from "@langchain/openai"; 
import { HumanMessage } from "@langchain/core/messages";


export class LangChainService {
    static async askOpenAI(apiKey: string, userInput: string): Promise<string> {
      try {
        const model = new ChatOpenAI({
          openAIApiKey: apiKey,
          temperature: 0.7,
        });
  
        const response = await model.invoke([new HumanMessage(userInput)]);
  
        // Eğer response.content string değilse, string'e çevir
        return typeof response.content === "string"
          ? response.content
          : JSON.stringify(response.content);
      } catch (error) {
        console.error("OpenAI çağrısı başarısız:", error);
        throw new Error("OpenAI isteği sırasında hata oluştu.");
      }
    }
  }
  