import express, { Express } from 'express';
import healthRoute from "./health/route";

const app: Express = express();

app.use("/health", healthRoute);

export default app;
