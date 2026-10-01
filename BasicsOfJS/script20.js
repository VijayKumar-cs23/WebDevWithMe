//This Keyword in js: 'this' keyword refers to an object that is executing the current piece of code.
const student = {
    name : "vijay",
    age : 21,
    math : 92,
    eng : 85,
    phy: 92,
    getAvg(){
        return (this.math + this.eng + this.phy)/3;
    }
}
console.log(student.getAvg());


// try & catch
// try: try statement define a block of code to be tested for error while it is being executed.
// catch : catch statement define a block of code to be executed, if an error occur in try block. 
console.log("hello");
console.log("hello");
// let a = 100;
try{
    console.log(a);
}catch{
    console.log("a variable is not defined.")
}
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");



// Arrow Function
const sum = (a,b) => {
    console.log(a+b);
};
sum(3,5);

// it can be written like this as well.
const mul = (a,b) => a*b; //like return a*b.
console.log(mul(7,5));

// Write an arrow function that return the square of a number 'n'.
const square = (n) => n*n;
console.log(square(5));


//Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.
const isEven = (n) => n%2==0;
console.log(isEven(4));


// Set Timeout Function : it will execute at once at after given of time.
console.log("Hi,");
setTimeout( ()=>{
console.log("vijay");
},3000);
console.log("How are you ! ");

// write a function that prints 'Hello' word 5 times at interval of 2 sec each.
let id = setInterval( ()=>{  // SetInterval Function : it will execute again and again at after given of time.
     console.log("hello");
},2000);
setTimeout( ()=>{
    clearInterval(id); // this is the statement to stop the setInterval function
},10000);


//'this' keyWord with arrow function.

//this for object: 
let stude = {
 name : "GhanShyam",
 marks:95,
 prop:this, // globle scope.. refers to the window object 
 getname: function(){
    console.log(this);
    console.log(this.name);    //here this is refering to the calling object and the calling object is 'stude' so properties for this will be stude object.
 },
 getmarks:()=>{
    console.log(this);
    console.log(this.marks);
 }
}
console.log(stude.getname());
console.log(stude.getmarks()); //undefind because here 'this' is refering to its parent's scope where 'stude' id it's parent(object) and its object scope is globle(Window). 
