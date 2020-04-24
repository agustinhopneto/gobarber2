import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
const port = 3333;

app.use(routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server started on port ${port}!`);
});
