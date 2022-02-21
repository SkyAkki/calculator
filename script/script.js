let operatorFlag = false;
let number1 = '';
let number2 = '';
let screen = document.querySelector(".display > .input");
let answer = document.querySelector(".display > .answer");
let operatorCount = 0;
let result = 0; //program is running fine if i remove result/operatorValue declararion... undeclared variable names used inside a function defaults to global behaviour
let operatorValue = '';


function operate(operatorValue){
    if (operatorValue == '+')
    {
        result = parseFloat(number1) + parseFloat(number2);
    }
    else if(operatorValue == '-')
    {
        result = parseFloat(number1) - parseFloat(number2);
    }
    else if(operatorValue == '*')
    {
        result = parseFloat(number1) * parseFloat(number2);
    }
    else if(operatorValue == '/')
    {
        result = parseFloat(number1) / parseFloat(number2);
    }
    result = parseFloat(result.toFixed(2)); //convert to Float again to remove the trailing zeros
    answer.textContent = document.getElementsByClassName("input").item(0).textContent + '=';
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
        if (value == 'back')
        {
            number2 = number2.slice(0,number2.length -1)
            screen.textContent = number1 + operatorValue + number2; //hardcoded
            checkDot(number2);
            return 0;
        }
        number2 = number2.concat(value);
    }
    else
    {
        if (value == 'back')
        {
            number1 = number1.slice(0,number1.length -1)
            screen.textContent = number1;
            checkDot(number1);
            return 0;
        }
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
    screen.textContent = result;
    document.getElementById("dot").disabled = false; 
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
function checkDot(number){
    if (number.includes('.'))
    {
        document.getElementById("dot").disabled = true; 
    }
    else
    {
        document.getElementById("dot").disabled = false; 
    }
}