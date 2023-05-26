// Задача 1
// Напиши дві функції:

// letMeSeeYourName(callback) - запитує імя користувача через prompt і повертає коллбек ф-цію callback
// gtree(name) - колбек який приймає імя і логує в консоль строку "Привіт" + name

// function letMeSeeYourName(callback) {
//     const name = prompt('Enter name');

//     callback(name);
// }

// function gtree(name) {
//     console.log(`Hello, ${name}`);
// }

// function greetWithAlert(name) {
//     console.log(`Hello, ${name}`);
//     alert(name);
// }

// // letMeSeeYourName(gtree);
// letMeSeeYourName(greetWithAlert);

// Задача 2
// Напиши дві функції:

// makeProduct(name, price, callback) - приймає імя і ціну товару, а також колбек.
// Функція створює обєкт товару, добавляючи йому уникальний ідентификатор у властивості id
//  і викликає колбек передаючи йому створений обєкт.

// showProduct(product) - колбек приймаючий обєкт продукта і логіруючий його в консоль

function makeProduct(name, price, callback) {
    const product = {
        name,
        price,
        id: Date.now(),
    };

    callback(product);
}

const logger = product => {
    console.log(product);
};

makeProduct('Холодильник', 10000, logger);
