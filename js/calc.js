let first = document.querySelector('.first-number');
let second = document.querySelector('.second-number');
let result = document.querySelector('.result');

let sum = () => result.textContent = `Результат сложения: ${Number(first.value) + Number(second.value)}`;
let sub = () => result.textContent = `Результат вычитания: ${Number(first.value) - Number(second.value)}`;
let div = () => result.textContent = `Результат деления: ${Number(first.value) / Number(second.value)}`;
let mul = () => result.textContent = `Результат умножения: ${Number(first.value) * Number(second.value)}`;


let buttonDiv = document.querySelector(".btn-div");
buttonDiv.addEventListener("click", clickDiv);

function clickDiv () {
    if (second.value == 0) {result.textContent = "На ноль делить нельзя!"}
    else {div()}
}

let buttonSum = document.querySelector(".btn-sum");
buttonSum.addEventListener("click", sum);

let buttonSub = document.querySelector(".btn-sub");
buttonSub.addEventListener("click", sub);

let buttonMul = document.querySelector(".btn-mul");
buttonMul.addEventListener("click", mul);