import serverless from 'serverless-http';
import { app } from '@/index';
import path from 'path';

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

export const handler = serverless(app);