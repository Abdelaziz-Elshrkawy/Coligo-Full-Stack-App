import express, { Request, Response } from 'express';
import { PORT } from './env';
import announcement from './Routes/AnnouncementRoute';
import quiz from './Routes/QuizRoute';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', async (req: Request, res: Response): Promise<void> => {
  res.send('Coligo App');
});

app.use('/announce', announcement);
app.use('/quiz', quiz);

app.listen(PORT, (): void => {
  console.log(`\x1b[34m[Running] on  => http://localhost:${PORT}`);
});
