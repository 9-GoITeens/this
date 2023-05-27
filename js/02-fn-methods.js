/*
 * call і apply
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// console.log(showThis);
// console.dir(showThis);

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'red');
// console.log(hat);

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind
 */
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);
/*
 * counter
 */
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
