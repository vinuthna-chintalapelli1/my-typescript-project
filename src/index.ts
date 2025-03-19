import express from 'express';

const app = express();
const port = 6010;

app.get('/', (req, res) => {
  res.send('Hello, MCP Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});