const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rate:Number,
    count:Number
})

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:10,
        required:true,
        unique:true,
        trim:true
    },
    price:Number,
    description:String,
    category:String,
    image:String,
    // rating:{
    //     rate:Number,
    //     count:Number
    // }
    rating:ratingSchema
})

const ProductModel = new mongoose.model('Product',productSchema);

module.exports = ProductModel;