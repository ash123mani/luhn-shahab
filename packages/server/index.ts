import express, { Router } from 'express';
import cors from 'cors';
import { replaceTscAliasPaths } from 'tsc-alias';

replaceTscAliasPaths({
  configFile: './tsconfig.json'
});

import responseHeaders from '@/middlewares/resp-header';
import { healthCheckRouter } from '@/routes/healthcheck';
import { validateRouter } from '@/routes/validate';
import { logError, returnError, isOperationalError } from '@/errors';

export const app = express();
const PORT = 5001;
const isDev = process.env.NODE_ENV === 'development'

declare global {
  interface Error {
    statusCode: number;
    isOperational?: boolean;
    description?: string
  }
}

app.use(cors())
app.use(responseHeaders);
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/validate', validateRouter);

app.use(logError)
app.use(returnError)

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err: Error, promise) => {
  server.close(() =>   logError(err));

  if (!isOperationalError(err)) {
    process.exit(1)
  }
});

