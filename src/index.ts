import express, { Express, Application, Request, Response } from 'express';
import multer, { Multer } from 'multer';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.set('port', process.env.PORT || 4000);

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router 

import kafka from "./routers/kafka.router";

app.use("/kafka",kafka);

export default app;
