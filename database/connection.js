const mongoose = require('mongoose');

//Database connection
const connectDatabase = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log("Database connected successfully.");
    }
    catch(err){
        console.log("Error occured:",err);
    }
}

module.exports = connectDatabase;