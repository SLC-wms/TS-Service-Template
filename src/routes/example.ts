import example from '../example';
import { Request, Response } from 'express';

export default function (_req: Request, res: Response) {
    const body = example();
    res.status(200).send(body);
}
