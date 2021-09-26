
const pathToProdsImages = `page_01`;// не нужно, т.к. фото в корне!!
const vstavkaEl = document.querySelector ('.vstavka')

/*Этот кусок кода html вставляется в index.html*/
function getProductMarkup(product){
    return `
    
    <div class="card_1">

        <div class="top_card">
            <img src="pf.png" alt="" class="foto_card">

            <div class="dark_card">

                <button data-productId="${product.id}">
                    <img src="images/cart.svg" alt="">
                    add to Cart
                </button>

            </div>

        </div>


        <div class="bottom_card">
            <div class="name_card">${product.name}</div> <!--Ожидаю: Tovar_0 и далее+1-->
            <div class="text_card">${product.opisanie}</div> <!--Ожидаю: God Product for...-->
            <div class="price_card">&#8381 ${product.price}</div> <!--Ожидаю: &#8381 (код Рубля)400 и далее+100-->
        </div>

    </div>
        
    `;
};

/*Функция вставки ТРЁХ КАРТОЧЕК в код страницы index.html*/
/*Что вставлять = prods, куда вставлять = vstavkaEl*/
function insert (prods, vstavkaEl){
    let prodsMarkup = '';

        /*Перебор FOR OF заполняет шаблонные литералы ${...}*/
        for (let product of prods ) {
            prodsMarkup +=getProductMarkup(product);
        }
        /*Сама вставка: где, что */
        vstavkaEl.insertAdjacentHTML('afterbegin' , prodsMarkup) ;
}

insert (prods , vstavkaEl);