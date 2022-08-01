// getProductByIds
// var productList = [];
var products = []
function getProductById() {
  axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1",
    method: "GET",
    responseType: "json",
  })
    .then((res) => {
      // productList = res.data.content
      var product = res.data.content;
      console.log(products)
      console.log(product);
      
      renderProduct(product);
      pushSize(product.size)
      products = res.data.content.relatedProducts;
      renderRelatedProduct();

     
    })
    .catch((err) => {
      console.log(err);
    });
}

getProductById();

// renderProduct

function renderProduct(product) {
  var html = "";

  html = `
       <div class="container">
            
                <div class="left">
                     <img src="${product.image}" >
                </div>

                <div class="right">
                <h3 class="productName">${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="available">Available size</p>
                <div class="size">
                    <p class="available">Available</p>
                    <p class="size"></p>
                
                </div>
                <p class="price">${product.price}$</p>
                <div class="quantity">
                        <button class="plus"><span><i class="fa fa-plus"></i></span></button>

                        <span class="text">1</span>
                        <button class="minus"><span><i class="fa fa-minus"></i></span></button>
                </div>
                <button class="btn-add"><span>Add to cart</span></button>
                </div>
           

      
       </div>
       
       
       `;
          
       document.querySelector("#show").innerHTML = html;
}

function pushSize(productSize){

  let size = '';
  for (let value of productSize) {
    size += `<button class="btn-size"><span>${value}</span></button> `
  }
  document.querySelector('.size').innerHTML = size;
}


function renderRelatedProduct(){
  let htmls = '';
  
  for (let i = 0; i < products.length;i++){
      let product = products[i]
    console.log(product)
      htmls += 
      `
          
            <div class="product-card">
              <div class="card">
                <img class="img-fluid" src="${product.image}" alt="">
                <div class="card-body">
                  <div class="content">
                  <h4 class="name">${product.name}</h4>
                  <button class="short-description">short description...</button>
                  <p class="des d-none">${product.shortDescription}</p>
                  </div>
                  <div class="btn-bottom">
                    <button class="btn-buy-now"><span>Buy now</span></button>
                    <button class="btn-price"><span>${product.price}</span></button>
                  </div>
                </div>
              </div>
            </div>
          
      `
  }
    
    document.querySelector('.show-relateProduct').innerHTML = htmls
}
