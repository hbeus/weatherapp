import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import cors from 'cors';
import middlewares from './src/middlewares/Middlewares.js';
import config from './config/Config.js';
import applicationRoute from './src/routes/Application.route.js';

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

applicationRoute.route(app);
//URL not found handler
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

config.dbConnect();
config.dbPort(app);

export default app;
