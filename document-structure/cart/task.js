const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const CARD_KEY = 'card';

productQuantityControls.forEach((productQuantityControl)=>{
    const productDec = productQuantityControl.querySelector('.product__quantity-control_dec');
    const productInc = productQuantityControl.querySelector('.product__quantity-control_inc');
    const productValue = productQuantityControl.querySelector(".product__quantity-value");

    let count = 1;
    productDec.addEventListener('click', ()=>{
        if (count>1){
            count--;
            productValue.textContent = count;   
        }
    });
    productInc.addEventListener('click', ()=>{
        count++;
        productValue.textContent = count;
    });
    
});

function addCart(dataId, imgPath, count){

    let existingItem = Array.from(cartProducts.children).find(item => item.getAttribute('data-id') === dataId);
    if (existingItem){
        const countProductItem = existingItem.querySelector('.cart__product-count');
        countProductItem.textContent=Number(countProductItem.textContent)+Number(count);
    }else{

        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${dataId}">
                <img class="cart__product-image" src="${imgPath}">
                <div class="cart__product-count">${count}</div>
                <a href="#" class="cart__product-remove">&times;</a>
            </div>
            `);
    }
    saveProductsToLocalStorage();
}

cartProducts.addEventListener('click', event=>{
    if(event.target.classList.contains('cart__product-remove')){
        event.preventDefault();
        const product = event.target.closest(".cart__product");
        product.remove();
        saveProductsToLocalStorage();
    }
});

products.forEach(product =>{
    const btnAdd = product.querySelector('.product__add');
    btnAdd.addEventListener('click', ()=>{ 
        const imgProduct = product.querySelector('.product__image');
        const countProduct = product.querySelector('.product__quantity-value'); 
        let dataId= product.getAttribute('data-id');
        let imgPath = imgProduct.getAttribute('src');
        let count = countProduct.textContent;
        addCart(dataId, imgPath, count);
    })
});


function saveProductsToLocalStorage() {
    const products = [];
    const ItemsProduct = Array.from(cartProducts.children);
    console.log(ItemsProduct);

    ItemsProduct.forEach(cartProduct => {
        const dataId = cartProduct.getAttribute('data-id');
        const imgPath = cartProduct.querySelector('.cart__product-image').getAttribute('src');
        const count = cartProduct.querySelector('.cart__product-count').textContent;
        products.push({ dataId, imgPath, count});
    });
    localStorage.setItem(CARD_KEY, JSON.stringify(products));
    console.log('save');
}

function loadProductsFromLocalStorage(){
    const savedProducts = localStorage.getItem(CARD_KEY);
    if (savedProducts) {
        const products = JSON.parse(savedProducts);
        console.log(products);
       
        products.forEach(product => {
             addCart(product.dataId, product.imgPath, product.count);
        });
    }
}

loadProductsFromLocalStorage();