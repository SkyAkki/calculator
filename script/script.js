function add(){

}
function subtract(){

}
function multiply(){

}
function divide(){

}
function operate(number1,number2,operation){

}
let decimals = document.querySelectorAll(".decimal-buttons > button");
let number1 = '';
let screen = document.querySelector(".display > .input");
// decimals.forEach(key => key.addEventListener('click',(e) => {
//     number1 = number1.concat(e.target.dataset.key);
//     console.log(number1);
// }));
function setValue(value){
    number1 = number1.concat(value);
    screen.textContent = number1;
}


