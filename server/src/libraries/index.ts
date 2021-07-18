import sharp from 'sharp';
import { readFileSync } from 'fs';
import path from 'path';

const create = async (file: string | null, width: number | null, height: number | null): Promise<void | string> => {
  //const result = await readFileSync(__dirname + '/assets/images/'+ file);
  try {
    const pathImage = path.resolve(__dirname, `../assets/images/${file}`);
    const pathOutput = path.resolve(__dirname, `../assets/thumbnails/${file}.jpeg`);
    const image = await sharp(pathImage)
      .rotate()
      .resize(width, height, { fit: 'fill', position: 'center' })
      .jpeg({ quality: 100 })
      .toFile(pathOutput);
  } catch (err) {
    console.error(err);
  }
};
export default create;
