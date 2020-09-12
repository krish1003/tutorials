

import {Request, Response} from 'express';
import {TUTORIALS} from "./db-data";



export function getAllTutorials(req: Request, res: Response) {
   res.status(200).json({ payload: Object.values(TUTORIALS)});
}
