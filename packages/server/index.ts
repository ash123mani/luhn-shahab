import express, { Router } from 'express';
import cors from 'cors';
import { replaceTscAliasPaths } from 'tsc-alias';
import serverless from 'serverless-http';
import path from 'path';

replaceTscAliasPaths({
  configFile: './tsconfig.json'
});

import responseHeaders from '@/middlewares/resp-header';
import { healthCheckRouter } from '@/routes/healthcheck';
import { validateRouter } from '@/routes/validate';
import { logError, returnError, isOperationalError } from '@/errors';



export const app = express();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV === 'development'

declare global {
  interface Error {
    statusCode: number;
    isOperational?: boolean;
    description?: string
  }
}
const router = Router();
app.use(cors())
app.use(responseHeaders);
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/validate', validateRouter);

app.use('/api/', validateRouter);

app.use(logError)
app.use(returnError)

if (isDev) {
  const server = app.listen(PORT, () =>
    console.log(`Sever running on port ${PORT}`)
  );
}

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

process.on("unhandledRejection", (err: Error, promise) => {
  logError(err);

  if (!isOperationalError(err)) {
    process.exit(1)
  }
});


export const handler = serverless(app);

