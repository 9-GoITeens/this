const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementButton = document.querySelector('.js-decrement');
// console.log(decrementButton);
// console.dir(decrementButton);
decrementButton.addEventListener('click', function () {
    console.log('клік по кнопці зменьшити');

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

const incrementButton = document.querySelector('.js-increment');
// console.log(incrementButton);
incrementButton.addEventListener('click', function () {
    console.log('клік по кнопці збільшити');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

const valueEl = document.querySelector('.js-value');
// console.log(valueEl);
