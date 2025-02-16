import http from 'http';
import app from './app';
import { setupSwagger } from "./swagger";

const port = 5000;
const server = http.createServer(app);
setupSwagger(app);

server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});