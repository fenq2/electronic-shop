import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    imagePrev: {type: String, required: true},
    category: {type: String, required: true},
    attributes: [{type: String}]
});

export const Card = mongoose.model('cards', cardSchema);

