import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();
const port : number =  3000;


app.listen(port, ()=>console.log("app listening on http://localhost:" + port));