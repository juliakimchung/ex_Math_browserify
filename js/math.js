"use strict";

let $ = require("jquery");
console.log("this module is for event");


let add =function add(x, y) {
	return parseInt(x) + parseInt(y);
};
add();

let subtract =function subtract(x, y) {
	return x - y;
};
subtract(); 
//console.log("subtract function working", subtract(20, 34));
let multiply = function multiply(x, y) {
	return x * y;
};
multiply();
console.log("multiply result", multiply(5,10));

let divide = function divide(x, y) {
	return x/y;
};
divide();

let square = function square(x) {
	return x*x;
};
square();
console.log("square result",square(81) );

let squareRoot = function squareRoot(x) {
	return Math.sqrt(x);
};
squareRoot();

console.log("squareRoot funtion working", squareRoot(45));

module.exports = {add, subtract, multiply, divide, square, squareRoot};






