/*Ф-ция: Слушает клики кнопки Add To cart*/
function clickAddToCart(){
    const btnId = document.querySelectorAll('button[data-productId]');
    btnId.forEach (function (button){
        button.addEventListener('click' , adProdHand);
    })
};

/*Ф-ция, кот.обрабатывает событие от клика  */
function adProdHand (event){
    const prodId = event.currentTarget.getAttribute('data-productId');

    itogKorzina (prodId);
}

clickAddToCart ();