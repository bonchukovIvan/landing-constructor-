import path from 'path';
import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises';
import fs from 'fs';
import { zip } from 'zip-a-folder';
import { existsSync, rmdir } from 'fs';
import lignator from 'lignator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingName = 'testLanding1';
const workDir = path.join(__dirname, '..', 'files');
const landingDir = path.join(workDir, landingName);
const zipPath = path.join(__dirname, '..','zip');

class LandingService {

    get zipName() {
        return path.join(zipPath, landingName)+'.zip';
    }

    async createLandingDir() {
        // const landingName = (Math.random() + 1).toString(36).substring(7);
        fsPromise.mkdir(landingDir, { recursive: true })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'css'))
            .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'css', 'main.css'), ' ');
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
    }

    async landingUpdate() {

    }

    async landingDelete() {
        lignator.remove(landingDir);
    }

    async landingToZip() {
        await zip(path.join(landingDir), this.zipName);
    }
};

export default new LandingService();
