# Frontend için Dockerfile
FROM node:16

WORKDIR /app

COPY ui/package*.json ./

RUN pnpm install

COPY ui ./

EXPOSE 3000

CMD ["pnpm", "dev:ui"]
