// alert("something is wrong!");
// prompt("please enter your roll no.");

// let str = "help!";
// console.log(str.trim().toUpperCase());
// console.log(str.indexOf("lp"));
// console.log(str.slice(1,3));
// console.log(str.replace("p","pme"));

// // Array
// let names = ["vijay","deepu","rahul"];
// console.log(names);
// console.log(names[0]);
// console.log(names[0][0]);

// names[1]="mohit";
// console.log(names);


// let cars = ["audi","maruti","volvo"];
// cars.push("toyota")
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("BMW");
// console.log(cars);
// cars.shift();
// console.log(cars);
// console.log(cars.indexOf("maruti"));
// console.log(cars.indexOf("Audi"));
// console.log(cars.includes("maruti"));
// console.log(cars.includes("Audi"));

// let primary = ["red","yellow","blue"];
// let secondary = ["orange","green","voilet"];

// let merge = primary.concat(secondary)
// console.log(merge);
// console.log(merge.reverse());

// console.log(merge.slice());
// console.log(merge.slice(3));
// console.log(merge.slice(2,4));


// merge.splice(4)
// console.log(merge);

// console.log(merge.splice(4));


// let chars = ['b','d','e','a'];
// console.log(chars.sort());
// let nums = ['43','44','26','87'];
// console.log(nums.sort());

// let x = 5;
// let y = 20;
// console.log(`You have payed ${x+y} Indian Rupees.`);
// console.log("You have payed" ,x+y, "Indian Rupees.");


// let n = prompt("enter your number");
// n = parseInt(n);
// for(int i = n ; i<= n*10;i=i+4){
//     console.log(i);
// }

console.log("guess my nanme");
const name = "vijay";
let guess = prompt("enter my name:");
while((guess != name)&&(guess != "quit")){
    guess = prompt("oh No! You guess wrong. please try again:");
}
if(guess == name){
    console.log("congrats! you guesed it right");
}






