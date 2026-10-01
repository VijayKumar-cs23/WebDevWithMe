let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);

// }
// arr.forEach(print); 



// arr.forEach(function(el){
//     console.log(el);
// });


arr.forEach((el)=>{
    console.log(el);
})



let arr1 = [{
    name : "vijay",
    roll : 32,
},{
    name:"radha",
    roll:34,
},{
    name : "shyam",
    roll : 65,
}];
arr1.forEach( (student)=>{
    console.log(student.name);
});



// Spread : Expands an iterable into multiple values.
// Syntax : function func(...arr){
//            // do somethinf
//          }

let array = [3,2,5,1,4,6,8,9,7,0];
//console.log(Math.min(array[0],array[1],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[2]));
console.log(array[0],array[1],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[2]);

console.log(...array);

let char = "Raghav";
console.log(...char);



// Rest : allows a functions to take an indefinite number of arguments and bundle them into an array.

function Sum(...args){
  return args.reduce((sum,ele)=> sum+ele);
}

console.log(Sum(3,56,578,689,7,979));
console.log(Sum(656,75,75,67,86,8979,7,0,7,85,664,5,53,24,52,3,243,4));
