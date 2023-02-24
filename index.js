import express from 'express';
import fs, { mkdir, readFile, writeFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises';
import { zip } from 'zip-a-folder';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingName = (Math.random() + 1).toString(36).substring(7);
const workDir = path.join(__dirname, 'files');
const landingDir = path.join(workDir, landingName);
const outPath = path.join(__dirname, 'zip', 'test.zip');

const PORT = 5000 || process.env.PORT;

const app = express();


app.get('/api/landing', async (req, res) => {
    fsPromise.mkdir(landingDir)
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'css'))
            .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'css', 'main.css'), ' ')
            })
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'js'))
            .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'js', 'main.js'), ' ')
            })
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'images'))
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'index.html'), ' ')
                .catch((err) => {
                    if(err) console.log(err);
                    });
        })
        .catch((err) => {
            if(err) console.log(err);
        });

    res.send({
        ok: 'ok',
    });
});

app.post('/api/zip', async (req, res) => {
    const sourceDir =path.join(workDir, 'lwpg8');
    await zip(path.join(sourceDir), outPath);
});

app.get('/api/download', (req, res) => {
    res.download('./zip/test.zip');
})

app.delete('/api/landing', (req, res) => {
    fsPromise.rm(path.join(workDir, '6olkc'), { recursive: true, force: true }, err => {
        if (err) {
          throw err;
        }
      });
    res.send({
        ok: 'ok',
    });
});

app.listen(PORT, () =>{
    console.log(`Server started. PORT: ${PORT}`);
})