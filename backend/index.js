import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { Category } from './models/category.js';
import { Card } from './models/card.js';
const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const start = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
  });
};

app.get('/api/category', async (req, res) => {
  const categoryData = await Category.find();
  res.json(categoryData);
})

app.get('/api/cards', async (req, res) => {
  const cardsData = await Card.find();
  res.json(cardsData);
})

// app.post('/api/category', async (req, res) => {
//   try {
//     const category = req.body;
//      const dbCategory = new Category(category);
//      await dbCategory.save();
//      res.status(200).json('Данные успешно добавлены'); 
// } catch (error) {
//     res.status(500).json({error: error.message, message: 'Данные неверные'})
// }
// })

app.post('/api/order', (req, res) => {
  const orderData = req.body;
  res.json(`Ваши данные получены, они являются ${orderData.phone}`);
});

start();
