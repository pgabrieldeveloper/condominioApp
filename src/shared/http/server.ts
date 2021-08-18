import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import '../typeorm';
import AppError from '../errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log('server running on port 3000! '));
