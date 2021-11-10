import { Request, Express } from 'express';
import multer, { StorageEngine, Multer } from 'multer';
import { resolve } from 'path';

const diskStorage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, done: Function): void => {
    if (!file) {
      done(new Error('Upload file error'), null);
    } else {
      done(null, resolve(__dirname, '../assets/images/'));
    }
  },
  filename: (req: any, file: Express.Multer.File, done): void => {
    done(null, file.originalname);
  },
});

const fileValidator = (req: any, file: Express.Multer.File, done: Function): void => {
  const extFile = file.originalname.replace('.', '');
  const extPattern = /(jpg|jpeg|png|gif|svg|doc)/gi.test(extFile);

  if (!extPattern) {
    done(new TypeError('File format is not valid'), null);
  } else {
    done(null, true);
  }
};

const fileUpload = multer({ storage: diskStorage, limits: { fileSize: 1000000 }, fileFilter: fileValidator }) as Multer;
export default fileUpload;
