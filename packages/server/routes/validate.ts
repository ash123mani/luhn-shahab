import express from 'express';
import { validateController }  from '@/controllers/validate';

export const validateRouter = express.Router();

validateRouter.post("/", validateController);
