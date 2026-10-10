// Async & Awaite Keywords.................
 
// ASYNC KEYWORD............................................................................................................
// creates an Async function : Use 'async' Keyword before creating a function and it always return a promise.

// async function greet(){
//  throw "week Connection!";  //throw keyword is used to throw a error. 
//     return "hello";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved!");
//     console.log("result was : "+result);
// })
// .catch((error)=>{
//     console.log("promise was rejected!");
//     console.log("error was : "+error);
// })

// let demo =async ()=>{
//   return "Hello!"
// }

// console.log(demo);
// console.log(demo());


// AWAIT Keyword.............................................................................................................
// it pauses the execution of it's surrounding async function until the promise is settled(resolved or selected).
// await keyword can be used only inside the async function.

// function getNumber(){
//     return new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//     },1000);
//     })
// }

// async function demo(){
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     await getNumber();
// }

// demo();


// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,rejected)=>{
//      setTimeout(()=>{
//        h1.style.color=color;
//        resolve("color Changed");
//      },delay);
//     });
// }

// async function demo1(){
//    await changeColor("red",1000);
//    await changeColor("green",1000);
//    await changeColor("yellow",1000);
//          changeColor("blue",1000);
// }
// demo1();


// // Handling Rejections with await

// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let num = Math.floor(Math.random()*5)+1;
//         if(num>3){
//             reject("promise rejected!")
//         }
//        h1.style.color=color;
//        console.log(`color changed to ${color}`)
//        resolve("color Changed!");
//      },delay);
//     });
// }

// async function demo1(){
//     try{
//        await changeColor("red",1000);
//    await changeColor("green",1000);
//    await changeColor("yellow",1000);
//    await changeColor("blue",1000);
//     }
//     catch(err){
//         console.log("error Caught!")
//         console.log(err);
//     }
   

//    let a = 10 ;
//    console.log(a+28);

// }
// demo1();


// API(Application Programmig Interface) -> return the data in the form of JSON.

// JSON(JavaScript Object Notation):In previous time our data was in XML(Extencible markup language) but at later data comes in JSON formate when you call for an API.
//JSON is not a part of javaScript.Json is just a formate.JSON formate data is very similar to JS object but it is different like in JSON data all the key comes with String formate and any key can't contains undefined.

// for more information about JSON visit-> www.JSON.org

//we have some JSON vaidators just visit and you can check you data is in JSON formate or not. jus search json validators and check.


// ACCESSING data from JSON->As we know responce always comes in a form of a 'String'.
//
// JSON.parse(data)  it is a method to parse a string data into a JS object.

//JSON.stringify(json) it is a method to parse a JS object data into JSON.

let jsonRes = `{
  "productId": "PROD-2024-001",
  "name": "Wireless Bluetooth Headphones",
  "category": "Electronics",
  "price": 79.99,
  "currency": "USD",
  "inStock": true,
  "quantity": 145,
  "rating": 4.5,
  "brand": "AudioTech"
}`;

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.name);

let conJSON = JSON.stringify(validRes);
console.log(conJSON);


