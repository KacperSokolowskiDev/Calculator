let firstValue = parseInt(prompt("Type the first number"));
console.log(firstValue);
let operator = prompt("Type the operator");
console.log(operator);
let secondValue = parseInt(prompt("Type the second number"));
console.log(secondValue);

function sum (a,b){
  return a+b;
}
function substraction (a,b){
  return a-b;
}
function multiply (a,b){
  return a*b;
}
function division (a,b){
  return a/b;
}
function modulo (a,b){
  return a%b;
}
function result (){
    if (operator == "+"){
      console.log(sum(firstValue, secondValue));
    }
    else if (operator == "-" ){
      console.log(substraction(firstValue, secondValue));
    }
    else if (operator == "*"){
      console.log(multiply(firstValue, secondValue));
    }
    else if (operator == "/" ){
      console.log(division(firstValue, secondValue));
    }
    else if (operator == "%"){
      console.log(modulo(firstValue, secondValue));
    }
    else{
      console.log("Not a operator!!!")
    }
}

result()
