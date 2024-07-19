import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routes/UserRoutes';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.use(bodyParser.json());

    this.app.use(userRouter);

    this.routes();
  }

  private config(): void {
    this.app.use(
      cors({
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
      }),
    );

    this.app.use(express.json());
  }

  private routes(): void {
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
