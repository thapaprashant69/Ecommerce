// const {writeFileSync} = require('fs');
// const products = require('../data.json');
const ProductModel = require('../models/Product');



const returnAllProducts = async(req,res)=>{
    // const {category} = req.query;
    // if(category){
    //     const SelectedProducts = products.filter((product)=>{
    //         return product.category === category;
    //     });
    //     res.json(SelectedProducts);
    //     return;
    // }
    // res.json(products);

    // console.log(req.query);
    // if(category){
    //     const selectedProducts = await ProductModel.find({category});
    //     console.log(category);
    //     res.json(selectedProducts);
    //     return;
    // }
    // let products = await ProductModel.find();
    // res.json(products);
    const getCategory = ()=>{
        const categories = ProductModel.find();
    }

    const {category=getCategory(),price=0} = req.query;

    if(category || price){
        const selectedProducts = await ProductModel.find({category:{$in:category}}).find({price:{$gt:price}});
        res.json(selectedProducts);
        return;
    }
    // if(category){
    //     console.log(category);
    //     const selectedProducts = await ProductModel.find({category:{$in:category}});
    //     res.json(selectedProducts);
    //     return;
    // }
    // if(price){
    //     const selectedProducts = await ProductModel.find({price:{$gt:price}});
    //     res.json(selectedProducts);
    //     return;
    // }


    const products = await ProductModel.find();
    res.json(products);
};

const returnSingleProducts = (req,res)=>{
    // const {productID} = req.params;
    // const singleProduct=products.filter((product)=>{
    //     if(product.id === Number(productID)){
    //         return product;
    //     }
    // })
    // if(singleProduct){
    //     res.json(singleProduct);
    //     return;
    // }
    // res.status(404).send(`Product of ID ${productID} is not available.`);

    // const {productID} = req.params;
    // let pro = new ProductModel();
    // console.log(pro);
};


const createProduct = async(req,res)=>{
    // products.push(req.body);
    // writeFileSync('./data.json',JSON.stringify(products));
    // res.send(products);

    try{
        // let product = new ProductModel(req.body);
        let products = req.body;
        products.map((product)=>{
            let pro = new ProductModel(product);
            pro.save();
        })
        res.json(products);
        // await product.save();
        // res.json({product});
    }catch(err){
        res.send("Error occured");
    }
}

const updateAndReplaceProduct = async(req,res)=>{
    const {productID} = req.params;
    const updatedProduct = await ProductModel.findOneAndReplace(productID,req.body);
    res.json(updatedProduct);   
}


const updateProduct = async(req,res)=>{
    const {productID} = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(productID,req.body,{new:true}); //{new:true} returns new updated product to updatedProduct
    res.json(updatedProduct);
}


const deleteProduct = async(req,res)=>{
    

}


module.exports = {returnAllProducts,returnSingleProducts,createProduct,updateProduct,updateAndReplaceProduct,deleteProduct};