import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const start = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
  });
};

app.post('/api/order', (req, res) => {
  const orderData = req.body;
  res.json(`Ваши данные получены, они являются ${orderData.phone}`);
});

start();
