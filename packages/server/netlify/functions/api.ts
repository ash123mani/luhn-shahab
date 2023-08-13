import serverless from 'serverless-http';
import { app } from '@/index';
import { healthCheckRouter } from '@/routes/healthcheck';
import { validateRouter } from '@/routes/validate';
import path from 'path';

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.use('/.netlify/functions/api/healthcheck', healthCheckRouter);  // path must route to lambda
app.use('/.netlify/functions/api/validate', validateRouter);  // path must route to lambda

export const handler = serverless(app);