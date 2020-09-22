/*
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
*/

const random = Math.floor(Math.random() * 50) + 1;
console.log(random);
let guess = parseInt(prompt("type your guess!"));
console.log(guess);
let fails = 0;
let isCorrect = false;

do{
  // debugger

  if(guess === random){
    console.log("Congratulations");
    console.log("Total number of fails is " + fails);
    isCorrect = true;
    break;
  }
  else if (guess < random){
    console.log("Too low, try again");
    fails+=1;
    guess = parseInt(prompt("type your guess!"));
  }
  else if (guess > random){
    console.log("Too high, try again");
    fails+=1;
    guess = parseInt(prompt("type your guess!"));
  }

  else{
    console.log("ERROR");
    break;
  }
}while(random !== guess || isCorrect == false);
