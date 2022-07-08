const mongoose = require('mongoose')
const { Schema } = mongoose

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    menu: [{
        type: Schema.types.ObjectId,
        ref: 'dish',
        required: true,
    }],
})

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    restId: {
        type: Schema.types.ObjectId,
        ref: 'restaurant'
    },
    categories: [{
        type: Schema.types.ObjectId,
        ref: 'category'
    }],
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    size: {
        type: Number,
        required: false,
    },
    avalibility: {
        type: Boolean,
        required: true,
    },
    ingredientWarning: {
        type: String,
        required: false
    },
    preparationTime:{
        type: Number,
        required: false,
    },
    modifierGroup:{
        type: String,
        required: false,
    }
})

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
})