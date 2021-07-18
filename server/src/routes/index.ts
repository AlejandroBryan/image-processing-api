import path from 'path';
import { Router, Request, Response } from 'express';
import create from '../libraries/index';
import fileUpload from '../libraries/upload';

const router = Router();

router.get('/', async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    let width = (await Number(req.query.width)) || null;
    let height = (await Number(req.query.height)) || null;
    let file = (await req.query.file) as string;
    const image = await path.resolve(__dirname, `../assets/thumbnails/${file}`);

    // invoke your your function and pass the thr arguments
    create(file, width, height);

    if (!file) {
      next(new Error('The required file does not exist'));
    }
    res.sendFile(image);
  } catch (err) {
    if (err) next(new Error('An error occurred while getting the file'));
  }
});
router.post('/upload', fileUpload.single('image'), async (req: Request, res: Response) => {
  try {
    console.log(req.file, req.body);

    res.status(200).json({ message: req.body });
  } catch (err) {
    console.log(err);
  }
});

export default router;
