import express from "express";
import http from "http";

const app: express.Application = express();
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080;
const server: http.Server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});