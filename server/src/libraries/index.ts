import sharp from 'sharp';
import path from 'path';

const create = (file: string | undefined, width: number | null, height: number | null) => {
  const pathImage = path.resolve(__dirname, `../assets/images/${file}`);
  const pathOutput = path.resolve(__dirname, `../assets/thumbnails/${file}`);

  sharp(pathImage).resize(width, height, { fit: 'fill', position: 'center' }).toFile(pathOutput);
};

export default create;
