const readline = require("readline");


let firstValue;
let secondValue;
let operator;
let inputFlag = true;
let total = 0;

const run = async () => {
    const paramsHandler = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    await new Promise((resolve) =>
        paramsHandler.question("Please, type the first value: ", (firstInput) => {
        resolve(firstValue = Number(firstInput));
    }));
    
    await new Promise((resolve) =>
        paramsHandler.question("Please, type the next value: ", (nextInput) => {
        resolve(secondValue = Number(nextInput));
    }));
    await new Promise((resolve) =>
        paramsHandler.question("Please, type the operation: ", operation => {
        resolve(operator = operation)
    }));

    const { result, error } = calc();
    console.log(result);

}

const calc = () => {
    return { 
        result: operatorHandler[operator](firstValue, secondValue) 
    };
}

const operatorHandler = {
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "/": (firstValue, secondValue) =>  firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "%": (firstValue, secondValue) => (secondValue/ firstValue)*100,
    "^": (firstValue, secondValue) => Math.pow(firstValue, secondValue),
    "//": (firstValue, secondValue) => Math.pow(firstValue, 1/secondValue),
    "ce": () => total = 0,
    "exit": () =>  inputFlag = false,
    "default": () => "No operation found!"
}

run()