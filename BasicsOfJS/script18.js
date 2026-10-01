// Object Literals
const student ={
    name : "Vijay",
    age : 21,
    marks : 80.83,
    city : "mathura"
};


// Get Value
console.log(student["name"]);
console.log(student.marks);


// Add or Update Value
//  change the city to Mumbai.
console.log(student.city="Mumbai");

//add a new property,gender:"male".
console.log(student.gender="Male"); 

//delete marks from the table.
delete student.marks;

const classInfo = {
    aman :{
        grade :"A",
        city : "delhi"
    },
    shradha : {
        grade : "A",
        city : "Pune"
    },
    rajan :{
        grade : "O",
        city : "Mumbai"
    }
    
}


// Array of objects
const classReco = [
    {
        name :"aman",
        grade : "A",
        city : "delhi"
    },
    {
        name :"shradha",
        grade : "A",
        city : "pune"
    },
    {
        name :"rahul",
        grade : "0",
        city : "Mumbai"
    }
]

// To Access
console.log(classReco[0]);



// Math Objects
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-13));
console.log(Math.pow(2,4));
console.log(Math.floor(-5.5));
console.log(Math.floor(5.0000001));
console.log(Math.random());
console.log(Math.random());

// Generate a random number numer from 1 to 100
console.log(Math.floor(Math.random()*100)+1)

// Generate a random number numer from 20 to 24
console.log(Math.floor(Math.random()*100)+20)


// GUESSING NUMBER GAME
const max = prompt("Enter the Max Number :");
const random = Math.floor(Math.random()*max)+1;      //here 1 shows range from 1 to max(by user).
let guess=prompt("Guess the Right Number");
while(true){
    if(guess=="quite"){
        console.log("You have quite the game!");
        break;   
    }
    if(guess==random){
        console.log("You guessed right, Congratulations!");
        break;
    }else{
        guess = prompt("Sorry you guessed the Wrong!,Please try Again.")
    }
}
