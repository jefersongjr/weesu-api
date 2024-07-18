import express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  private config(): void {
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
