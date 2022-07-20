const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./data.json');
const router1 = require('./public/routes/productAPIRoutes');
const hbs = require('hbs');
const connectDatabase = require('./database/connection');

connectDatabase();          //Connecting database

app.use(cors());
app.use(express.json()); //To get form data with body part in it,Used for POST method in productAPIRoutes.js

app.use('/static',express.static('./public'));
// app.set('views','/views');

app.set('view engine','hbs');

hbs.registerPartials( __dirname + '/views/partials')

const logger =((req,res,next)=>{
    console.log('This is a middleware');
    next();
})

const logger2 =((req,res,next)=>{
    console.log('This is next middleware');
    next();
})


app.use('/api/products',router1);

// app.get('/',[logger,logger2],(req,res)=>{
//     res.render('index',{products});
// })

// app.get('/:productID',(req,res)=>{
//     const {productID} = req.params;
//     const singleProduct = products.filter((product)=>{
//         if(product.id === Number(productID)){
//             return product;
//         }
//     })
//     res.render('details',{singleProduct});
// })



app.listen(5000,()=>{
    console.log('Server started and listening at port 5000...');
})