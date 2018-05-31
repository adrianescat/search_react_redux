/*
* ITEM SERVER MODEL
*/

import mongoose from 'mongoose';
let Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: String,
    image: String,
    price: Number,
    id: String
});

export default mongoose.model('Item', Schema);