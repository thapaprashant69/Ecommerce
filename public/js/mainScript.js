const productSection = document.querySelector('.products');

  const createCardAddData = (product)=>{
    const singleProduct = `<div class="product-card">
    <a href="/details.html">
    <div class="product-image">
      <img src="${product.image}">
    </div>
    <div class="product-info">
      <h5>${product.title}</h5>
      <h6>$ ${product.price}</h6>
    </div>
    </a>
  </div>`;

  productSection.innerHTML+=singleProduct;
  }

  const getData = async ()=>{
    try{
      const data = await fetch('http://localhost:5000/api/products');
      const products = await data.json();
      products.map((product)=>createCardAddData(product));
      // for(product of products){
      //   createCardAddData(product);
      // }
    }
    catch(err){
      console.log(err);
    }
  }
  getData();