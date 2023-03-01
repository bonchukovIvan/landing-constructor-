import express, { json } from 'express';
import router from './routers/index.js';
import { existsSync } from 'fs';
import fsPromise from 'fs/promises';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import readline from 'readline';

const PORT = 5000 || process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "files/testLanding1/images");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({dest:"/files/testLanding1/images/"});

app.use(json());
app.use(express.static(__dirname));
app.use(multer({storage:storageConfig}).single("image"));
app.use('/api', router);

const replaceElem = function(elem, replaceElem) {
    if (line.includes(elem)) {
        fileData += line.replace(elem, replaceText) + '\n';
    }
};

const replacePageContent = function(req) {
      // const rl1 = readline.createInterface({
      //   input: fs.createReadStream('./files/testLanding1/css/styles.css'),
      //   crlfDelay: Infinity
      // });

      // rl1.on('line', (line) => {
      //   lineCount++;
      //   // console.log(line, '\n\n');
      
      //   if (line.includes('{img}')) {
          
      //   } else {
      //     fileData += line + '\n';
      //   }
      // });
      
      // rl1.on('close', () => {
      //   fs.writeFile('./files/testLanding1/css/styles.css', fileData, (err) => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     console.log(`CSS has been replaced.`);
      //   });
      // });
}


app.post('/upload',  async (req, res, next) => {
    try {
        // console.log('File uploaded:', req.file);
        // await replacePageContent(req);   
          const {
          title,
          subtitle,
          sale_number,
          old_cost,
          sale_cost,
          list1,
          list2,
          list3,
          prod_count_var
      } = req.body;

      console.log();
      const filePath = './files/testLanding1/index.html'; 
      let filedata = req.file;
      console.log(filedata.path);
      console.log('---------------------');
      console.log(req.file.filename);
        
      let lineCount = 0;
      let fileData = '';

      const rl = readline.createInterface({
          input: fs.createReadStream(filePath),
          crlfDelay: Infinity
        });

  
      rl.on('line', (line) => {
          lineCount++;
          if (line.includes('{main_title}')) {
              fileData += line.replace('{main_title}', title) + '\n';
          } 
          else if (line.includes('{sub_title}')) {
              fileData += line.replace('{sub_title}', subtitle) + '\n';
          } 
          else if (line.includes('{sale_number}')) {
              fileData += line.replace('{sale_number}', sale_number) + '\n';
          } 
          else if (line.includes('{old_cost}')) {
              fileData += line.replace('{old_cost}', old_cost) + '\n';
          } 
          else if (line.includes('{sale_cost}')) {
              fileData += line.replace('{sale_cost}', sale_cost) + '\n';
          } 
          else if (line.includes('{eco}')) {
              fileData += line.replace('{eco}', old_cost-sale_cost) + '\n';
          } 
          else if (line.includes('{list1}')) {
              fileData += line.replace('{list1}', list1) + '\n';
          } 
          else if (line.includes('{list2}')) {
              fileData += line.replace('{list2}', list2) + '\n';
          } 
          else if (line.includes('{list3}')) {
              fileData += line.replace('{list3}', list3) + '\n';
          } 
          else if (line.includes('{prod_count_var}')) {
              fileData += line.replace('{prod_count_var}', prod_count_var) + '\n';
          } 
          else {
            fileData += line + '\n';
          }
        });
        
        rl.on('close', () => {
          fs.writeFile(filePath, fileData, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`HTML has been replaced.`);
          });
        });

      let cssFileData = '';
      const rl1 = readline.createInterface({
        input: fs.createReadStream('./files/testLanding1/css/styles.css'),
        crlfDelay: Infinity
      });

      rl1.on('line', (line) => {
        if (line.includes('{img}')) {
            cssFileData += line.replace('{img}', req.file.filename);
        } else {
            cssFileData += line + '\n';
        }
      });
      
      rl1.on('close', () => {
        fs.writeFile('./files/testLanding1/css/styles.css', cssFileData, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`CSS has been replaced.`);
        });
      });
        res.json({
          ok: 'ok',
        })
    } catch (err) {
        console.log(err);
    }

});

app.get('/up', (req, res) => {
    try {
        res.send('./files/testLanding1/index.html');
    } catch (err) {
        console.log(err);
    }

});

app.listen(PORT, () => {
    if (!existsSync('./files') && !existsSync('./zip')){
        fsPromise.mkdir('./zip');
        fsPromise.mkdir('./files');
    }
    console.log(`Server started. PORT: ${PORT}`);
});