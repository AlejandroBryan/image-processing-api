import path from 'path';
import { existsSync } from 'fs';
import { Router, Request, Response } from 'express';
import create from '../libraries/index';
import fileUpload from '../libraries/upload';

const router = Router();

router.get('/', async (req: Request, res: Response, next: Function) => {
  try {
    const width = (await Number(req.query.width)) || null;
    const height = (await Number(req.query.height)) || null;
    const file = (await req.query.file) as string;
    const result = await path.resolve(__dirname, `../assets/thumbnails/${file}`);
    const exitingFile = await path.resolve(__dirname, `../assets/images/${file}`);

    if (!existsSync(exitingFile)) {
      return next(new Error('The required file does not exist and as result a new thumbnail could not be created'));
    }
    // invoke your your function and pass the thr arguments
    create(file, width, height);
    await res.status(200).sendFile(result);
  } catch (err) {
    next(new Error('An error occurred while getting the file'));
  }
});

router.post('/upload', fileUpload.single('image'), async (req: Request, res: Response) => {
  try {
    // console.log(req.file, req.body);

    res.status(200).json({ message: req.body });
  } catch (err) {
    console.log(err);
  }
});

/* router.get('/pictures', async (req: Request, res: Response) =>{
  const exitingFile = await path.resolve(__dirname, `../assets/images`);
  const result = await readdirSync(exitingFile, 'utf8');
  res.status(200).json(result);
  console.log(result);
}); */

export default router;
