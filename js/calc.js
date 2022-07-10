let first = document.querySelector('.first-number');
let second = document.querySelector('.second-number');
let result = document.querySelector('.result');

let sum = () => result.textContent = `Результат сложения: ${Number(first.value) + Number(second.value)}`;
let sub = () => result.textContent = `Результат вычитания: ${Number(first.value) - Number(second.value)}`;
let div = () => result.textContent = `Результат деления: ${Number(first.value) / Number(second.value)}`;
let mul = () => result.textContent = `Результат умножения: ${Number(first.value) * Number(second.value)}`;