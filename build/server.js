"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`);
});
//# sourceMappingURL=server.js.map