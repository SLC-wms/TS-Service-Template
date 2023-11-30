import { Express, Response } from 'express';
import example from './example';

export default function (app: Express) {
    app.get('/status', (_, res: Response) => {
        res.status(200).end();
    });

    app.get('/example', example);
}
