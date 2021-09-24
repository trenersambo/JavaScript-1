
const pathToProdsImages = `page_01`;// ToDo: имя реал.каталога или НЕ Нужно!!
const vstavkaEl = document.querySelector ('.vstavka')

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
            <div class="name_card">${product.name}</div> //Ожидаю: Tovar_0 и далее+1
            <div class="text_card">${product.opisanie}</div> //Ожидаю: God Product for...
            <div class="price_card">${product.price}</div> // Ожидаю: от 400 и далее+100
        </div>

    </div>
        
    `;
}

// Далее - стр5. с отметки 5:50