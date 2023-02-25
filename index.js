import express, { json } from 'express';
import router from './routers/index.js';
import { existsSync } from 'fs';
import fsPromise from 'fs/promises';

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(json());

app.use('/api', router);

app.listen(PORT, () => {
    if (!existsSync('./files') && !existsSync('./zip')){
        fsPromise.mkdir('./zip');
        fsPromise.mkdir('./files');
    }
    console.log(`Server started. PORT: ${PORT}`);
});