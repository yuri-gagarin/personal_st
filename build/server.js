"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
var PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
var server = http_1.default.createServer(app);
server.listen(PORT, function () {
    console.log("Listening at PORT: " + PORT);
});
