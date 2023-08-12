import express from 'express';
import healthCheckController  from '@/controllers/healthcheck';

export const healthCheckRouter = express.Router();

healthCheckRouter.get("/", healthCheckController);
