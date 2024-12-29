// index.ts (your Express app)
import express, { Response } from 'express';

const app = express();
const port = 3000;

// A simple GET route that returns status and timestamp
app.get('/', (_, res: Response) => {
  const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format
  res.json({
    status: 'healthy',
    timestamp: timestamp,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app; // Export the app for testing purposes
