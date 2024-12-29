import express, { Response } from 'express';
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [new transports.Console()],
});

const app = express();
const port = 3000;

app.get('/', (_, res: Response) => {
  const timestamp = new Date().toISOString();
  res.json({
    status: 'healthy',
    timestamp,
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (): void => {
    logger.info(`Server running on http://localhost:${port}`);
  });
}

export default app;
