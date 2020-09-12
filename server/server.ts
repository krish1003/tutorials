

import * as express from 'express';
import {Application} from "express";
import { getAllTutorials } from './get-tutorial.route';
const app: Application = express();

app.route('/api/tutorials').get(getAllTutorials);

const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




