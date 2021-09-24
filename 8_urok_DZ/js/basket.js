/* При клике на КОРЗИНУ: появляется/исчезает сводТаблица */
const openBasket = document.querySelector('.korz_icon');
const basketEl = document.querySelector('.basket');

openBasket.addEventListener('click' , function(){
    basketEl.classList.toggle('hidden');
});


