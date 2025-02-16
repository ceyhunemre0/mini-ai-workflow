# Backend için Dockerfile
FROM node:16

WORKDIR /app

COPY server/package*.json ./

RUN pnpm install

COPY server ./

EXPOSE 5000

CMD ["pnpm", "dev:server"]
