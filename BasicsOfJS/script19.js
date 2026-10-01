// function defining
function printName(){
    console.log("Vijay");
}

// function calling
printName();

// create a function to roll a dice and return a random number between 1 to 6.
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();


// Function with parameters
function info(name, age, city){
    console.log(`My name is ${name}, I am ${age} years old and I live in ${city}`);
}
info("vijay", 21, "Mathura");


// create a function to calculate the table of a number.
function table(num){
    for(let i=num; i<=num*10; i=i+num){
        console.log(i);
    }
}

table(4);


// crater a function add two numbers and return the sum.
function add(num1, num2){
    return num1+num2;
}
console.log(add(5,6));


//concatenate the given string array and return the string.
let str = ["My ","name ","is ","Vijay."];
function concat(str){
    let result ="";
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;

}
console.log(concat(str));




// SCOPE: Scope deterrmines the accessbility of variables,objects and function from different parts of the code.

// 1. function scope:
let sum = 54;                //global scope variable
function add(num1,num2){
    let sum = num1+num2;     //function scope variable
}
add(6,4);


// 2. block scope:
let n=10;
for(let i=0;i<=n;i++){
    console.log(i);         //block scope variable
}
//console.log(i);             //cannot access i here because it is not defined in this scope.


// 3. lexical scope:It says if you have a nexted function.you can access the variable values from outer function to the inner function.
function outer(){
    let x = 5;
    function inner(){  // the scope of this function is function scope you can not access it outside of outer function.
        console.log(x);     //inner function can access the variable of outer function.
    }
    inner();
}
outer();



// Higher Order Function : A fucntion that takes one or more functions as an argument or returns a function.

function multipleGreet(func ,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
const greet = function(){
    console.log("hello!");
}

multipleGreet(greet,4);

// METHODS : Actions that can be performed on an object.





