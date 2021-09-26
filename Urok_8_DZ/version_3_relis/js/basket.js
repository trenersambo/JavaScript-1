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

    itogKorzina (prodId);//добавлен нов. товар в Корзину-> сраб.эта ф-ция(см.9)
}

clickAddToCart ();


/*найти span из иконки Корзины */
const basketCountEl = document.querySelector('.korz_icon span');//ЦифраВКружочке(см.8)

/* найти 2 класса из сводТаблицы */
const basketTotalEl = document.querySelector('.basketTotal');//СтрокаИтогоСуммаВсехТоваров
const basketTotalValueEl = document.querySelector('.basketTotalValue');//ЦифраИтогоСуммаВсехТоваров(см.7)

/* 1. внутрь объекта basket прилетает product c "ключ:значение" */
let basket = {};

/* 2. Этот прилет обеспечивает функция/метод */
function prodToKorzina (prodId){

    //если нет id, то присвоить 1, иначе ++
    if(!(prodId in basket)){
        basket[prodId] = 1;
    } else {
        basket[prodId]++ ;
    }
}

/* 3. Функ-я подготовки отрисовки полученных данных в сводТаблице */
function  vstavkaInKorzina(prodId){
    let prodEx = document.querySelector (`.prodCount[data-prodId = "${prodId}"]`);

    // если найден класс .prodCount
    if (prodEx) {
        plusProdCount(prodId);//увеличЧислоТоваровВКорзине (см.5)
        plusProdSum(prodId);// пересчетИтогСуммыПоТовару (см.6)
        }else{
            korzinaNewStroka(prodId);
        }
}
 
/*4. Ф-ия рисует новые СТРОКИ в сводТаблице */

function korzinaNewStroka(prodId) {

    let vstavkaInTable= `
    
    <div class="basketRow">
        <div> ${prods[prodId].name} </div> <!--Жду: Название товара-->
        <div> <span class = "prodCount" data-prodId = "${prodId}"> 1 </span> штук </div> <!--Жду: Количество-->
        <div> $${prods[prodId].price} </div> <!--Жду: Цена за шт.-->
        <div>  $<span class = "prodTotalRow" data-prodId = "${prodId}"> ${prods[prodId].price}</span> </div> <!--Жду: Итого-->
    </div>
    
    ` 
     basketTotalEl.insertAdjacentHTML("beforebegin", vstavkaInTable);

}

/*5. функ-ия увеличит кол-во товаров в строке в корзине */

function plusProdCount (prodId){
    const prodCountEl = document.querySelector (`.prodCount[data-prodId = "${prodId}"]`);
    prodCountEl.textContent++;
}

/* 6. Ф-ия пересчит.: ЦенаТовара*КоличТовара */
function plusProdSum (prodId){
    const prodTotalRowEl = document.querySelector(`.prodTotalRow[datd-prodId = "${prodId}"]`);
    let totalPriceForRow = (basket[prodId] * prods[prodId].price).toFixed(2); //штук*цена
    prodTotalRowEl.textContent = totalPriceForRow;
}


/*7. Считаем Общую стоимость Корзины. Вывод цены на страницу */

function itogSum (){
    let totalSum = 0;
    for (let prodId in basket){
        totalSum += basket[prodId]* prods[prodId].price
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}
 
/*8. ф-ия увелич.цифру в Кружочке */
function plusProdCount(){
    basketCountEl.textContent++;
}

/*9. товар добавлен в Корзину: срабатывает эта ф-ция */
 function itogKorzina(prodId){
     plusProdCount();
     prodToKorzina(prodId)
     korzinaNewStroka(prodId);
     itogSum();

 }