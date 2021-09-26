'use strict';
const texts = {
    text1: 'Самбо Рулит! ',
    text2: 'САМБО - олимпийский вид спортс',
    text3: 'Бразильское BJJ и САМБО - рулит'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let text = document.querySelector ('.text');
console.log (text);

let navLink = document.querySelectorAll ('.nav-link');
console.log (navLink);

navLink.forEach (function( a ){  //(link)
    a.addEventListener ('click' , clickHandler)
} )


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
   //alert ('test!!!') - тест сработал
changeActiveClass(event);
changeText(event);

}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */

function changeActiveClass(event) {
let active = document.querySelector('.active');
active.classList.remove ('active');
event.target.classList.add('active');

}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    if (event.target.textContent == 'Link 1'){
        text.textContent = texts.text1;
    }
    if (event.target.textContent == 'Link 2'){
        text.textContent = texts.text2;
    }
    if (event.target.textContent == 'Link 3'){
        text.textContent = texts.text3;
    }
    
}