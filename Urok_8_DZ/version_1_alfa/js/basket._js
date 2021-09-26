/* При клике на КОРЗИНУ: появляется/исчезает сводТаблица */
const openBasket = document.querySelector('.korz_icon');
const basketEl = document.querySelector('.basket');

openBasket.addEventListener('click' , function(){
    basketEl.classList.toggle('hidden');
});

/* ------------ */

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


/*найти span из иконки Корзины */
const basketCountEl = document.querySelector('.korz_icon span');

/* найти 2 класса из сводТаблицы */
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

/* 1. внутрь объекта basket прилетает product c "ключ:значение" */
let basket = {};

/* 2. Этот прилет обеспечивает функция/метод */
function prodToKorzina (prodId){

    //если нет id, то присвоить 1, иначе ++
    if(!(prodId in basket)){
        basket [prodId] = 1;
    } else {
        basket [prodId]++ ;
    }
}

/* 3. Функ-я подготовки отрисовки полученных данных в сводТаблице */
function  vstavkaInKorzina(prodId){
    let prodEx = document.querySelector (`.prodCount[data-prodId = "${prodId}"]`);

    // если найден класс .prodCount
    if (prodEx) {
        plusProdCount(prodId);//увеличСчетчик
        plusProdSum(prodId);// пересчетИтогСуммыПоТовару
        }else{
            korzinaNewStroka(prodId);
        }
}
 
/*4. Ф-ия рисует новые СТРОКИ в сводТаблице */

function korzinaNewStroka(prodId) {

    let tableTovar= `
    
    <div >
    
    `


}
