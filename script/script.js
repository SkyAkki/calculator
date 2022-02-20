let operatorFlag = false;
let number1 = '';
let number2 = '';
let screen = document.querySelector(".display > .input");
let answer = document.querySelector(".display > .answer");
let operatorCount = 0;
let result = 0; //program is running fine if i remove result/operatorValue declararion... undeclared variable names used inside a function defaults to global behaviour
let operatorValue = '';

function add(){
    result = parseFloat(number1) + parseFloat(number2);
}
function subtract(){
    result = parseFloat(number1) - parseFloat(number2);
}
function multiply(){
    result = parseFloat(number1) * parseFloat(number2);
}
function divide(){
    result = parseFloat(number1) / parseFloat(number2);
}


function operate(operatorValue){
    if (operatorValue == '+')
    {
        add();
    }
    else if(operatorValue == '-')
    {
        subtract();
    }
    else if(operatorValue == '*')
    {
        multiply();
    }
    else if(operatorValue == '/')
    {
        divide();
    }
    answer.textContent = result;
    number1 = result.toString();  //number1 is a int here
}


function setOperator(value){
    operatorFlag = true;
    document.getElementById("dot").disabled = false; 
    operatorCount += 1;
    if (operatorCount>1)
    {
        equals();
    }
    operatorValue = value;
    screen.textContent += value;
}
function setValue(value){
    if (value == '.')
    {
        document.getElementById("dot").disabled = true; 
    }
    if (operatorFlag)
    {
        number2 = number2.concat(value);
    }
    else
    {
        number1 = number1.concat(value);
    }
    screen.textContent += value;
}


function equals(){
    if (number2 == '0' && operatorValue == '/')
    {
        alert('This corner case is yet to be solved by the Mathematicians.')
        clears();
        return 0;
    }
    operate(operatorValue);
    number2 = '';
    operatorCount -= 1;
    screen.textContent = '';
}
function clears(){
    operatorFlag = false;
    operatorCount = 0;
    result = 0;
    number1 = '';
    number2 = '';
    answer.textContent = '';
    screen.textContent = '';
    operatorValue = '';
}