import express, { Response } from 'express';
import Router from './routes';
import { PORT } from './config';

const app = express();
app.use(express.json());
Router(app);
app.use((_, res: Response) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
