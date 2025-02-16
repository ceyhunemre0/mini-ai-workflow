import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini AI Workflow API",
      version: "1.0.0",
      description: "AIFINEX AI Workflow için API dokümantasyonu",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./src/routes/*.ts"], // Tüm route dosyalarını tarayacak
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
