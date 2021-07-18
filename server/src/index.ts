import express, { Request, Response, Application, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import imageRoute from './routes/index';
import ExpressErrorHandler from './libraries/ExpressErrorHandler';

const app: Application = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + 'assets/images'));
app.use(express.static(path.join(__dirname, 'assets')));

// server setup
const server = http.createServer(app);

const hostname: string = '0.0.0.0';

const PORT: number = 3001;

app.use('/api/images', imageRoute);

app.get('/', (req, res) => res.send('hello'));

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ExpressErrorHandler('Page Not Found', 404));
});

// error interface
interface ErrorResponse {
  statusCode: number;
  message: string;
}

app.use((err: ErrorResponse, req: Request, res: Response, next: Function): void => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  res.status(statusCode).json(err.message);
});

server.listen(PORT, hostname, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
