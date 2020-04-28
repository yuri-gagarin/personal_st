import express from "express";
import http from "http";
import path from "path";

// custom middleware //
import requestLogger from "./custom_middleware/requestLogger";

import combinedRoutes from "./routes/combinedRoutes";

const Router: express.Router = express.Router();
const app: express.Application = express();
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080;
const server: http.Server = http.createServer(app);

if (process.env.NODE_ENV !== "production") {
  app.use(requestLogger);
}
// router and routes configuration //
combinedRoutes(Router);
app.use(Router);
// end router and routes configuration //
// staic files configuration //
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static(path.join(__dirname, "public")));
} else {
  app.use(express.static(path.join(__dirname, "client/src")));
  app.use(express.static(path.join(__dirname, "public")));
}
// end static files configuration //


server.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});