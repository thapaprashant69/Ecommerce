const express = require('express');
const router = express.Router();
const { returnSingleProducts, returnAllProducts, createProduct, updateProduct, deleteProduct,updateAndReplaceProduct } = require('../../controllers/products');


router.get('/',returnAllProducts);


router.get('/:productID',returnSingleProducts);

router.post('/',createProduct);

router.put('/:productID',updateAndReplaceProduct);
router.patch('/:productID',updateProduct)

router.delete('/:productID',deleteProduct);

// router.delete('/',(req,res)=>{
//     const id = req.body;
//     products.forEach
// })


module.exports = router;