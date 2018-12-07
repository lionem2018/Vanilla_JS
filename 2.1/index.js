// const nicoInfo = {
//     name: "Nico",
//     age: 33,
//     gender: "Male",
//     isHandsome: true
// }
// console.log(nicoInfo, console);

// console.log('Gettings Nicolas');
// console.log('Hello Jun');
// console.log('Hello Liyn');
// console.log('Hello Dal');

function sayHello(name, age){
    console.log('Hello!', name, "you have", age, "years of age.");
}
sayHello("Nicolas", 15);    // name = "Nicolas", age = 15

function sayHello2(name, age){
    return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello2("Nicolas", 14);
console.log(greetNicolas)

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
}
const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(5, 5);
console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(power);