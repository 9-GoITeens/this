/*
 * Функція це частковий випадок обєкта -> ССИЛОЧНИЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Де і як була оголошена функція НЕ МАЄ НІЯКОГО ВПЛИВУ на контекст.
 *    - Контекст визначається В МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не привязаний явно.
 */

/*
 * Як метод объекта. В контексті обєкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Виклик без контекста
 * - В строгому режимі use strict = undefined
 * - Не в строгому режимі = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Як метод обєкта, але оголошена как зовнішня функция.
 * В контексті обєкта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showTag = showTag;
// console.log('user', user);

// user.showTag();

/*
 * Виклик без контекста, але обоголошена як метод обєкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функціях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 * Тренуємся 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Який this ???

/*
 * Тренуємся 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Який this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

/*
 * Тренуємся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     };

//     // changeColor(); // Який this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red'); // Який this ???

//     return sweater.updateColor;
// };

// makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor('blue'); // Який this ???

/*
 * Тренуємось 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Який this ???

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange'); // Який this ???
