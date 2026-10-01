// //DOM EVENTS: Event are signals that something has occured(like buttonPress, click or drag means something has triggered with the help of mouse or keyboard).

// // //onclick(when an element is clicked.)
// // let btn = document.querySelector("button");
// // console.dir(btn);

// // // btn.onclick= function(){
// // //     console.log("button was CLICKED!");
// // // }

// // // function sayHi(){
// // //     alert("hi");
// // // }
// // // btn.onclick=sayHi;


// // let allbtn = document.querySelectorAll("button");
// // for(btns of allbtn){
// //     btns.onclick = sayHi;
// //     btns.onmouseenter = function(){          //onmouseenter-> it will automatically trigger when you hover your mouse on button.
// //         console.log("you enter a button");
// //     }
// // }

// // function sayHi(){
// //     alert("hi");
// // }

// //.....................................................................................................................//

// //EVENT LISTENERS:

// // syntaxForEventListener 
// //-> element.addEventListener(event,callback)

// let btn1 = document.querySelectorAll("button");  
// for(btns of btn1){

//     // btns.onclick = sayHiMe; // on button click multiple functions of execution is not possible.So then comes EventListeners
//     // btns.onclick = sayHiThem;  
    
//     // btns.addEventListener("click",sayHiMe);
//     // btns.addEventListener("click",sayHiThem);
//     btns.addEventListener("dblclick",sayHiThem);

// }
// function sayHiMe(){
//     alert("hiME");
// }
// function sayHiThem(){
//     alert("hiTHEM");
// }

//activity first ended....................................................................................................//


// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randColor = getRandomcolor();
//     h3.innerText = randColor;

//     let divcolor = document.getElementById("changeColor");
//     divcolor.style.backgroundColor = randColor;
    
// }) ;

// function getRandomcolor(){
//   let red = Math.floor(Math.random()*255);
//   let green = Math.floor(Math.random()*255);
//   let blue = Math.floor(Math.random()*255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

// activity for changeColor is ended Here..................................................................................//


// EventListenerForEvents  STARTED........................................................................................//

// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//   console.log("para was clicked.")
// });
 
// let box =  document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//   console.log("mouse cusrsor entered inside box.")
// });

// EventListenerForEvents  Ended.........................................................................................//

// this keyword in EventListener started.................................................................................//
// let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// let para = document.querySelector("p");
// let h2 = document.querySelector("h2");

// function colorChange(){
//    console.log(this.innerText);
//    this.style.backgroundColor="red";
//    this.style.color="white";
// }
// btn.addEventListener("click",colorChange);
// h3.addEventListener("click",colorChange);
// para.addEventListener("click",colorChange);
// h2.addEventListener("click",colorChange);

//this keyword in EventListener Ended....................................................................................//


//KEYBOARD event Started.................................................................................................//

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
// console.log(event);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//   console.log("Key was Pressed");
//   console.log("pressed key CODE :"+event.code);
//   console.log("pressed key KEY :"+event.key);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(){
//   console.log("Key was released");
// });

// KEYBOARD event EncodedAudioChunk.apply...............................................................................//

// FORM EVENTS started....................................................................................................//

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//   event.preventDefault();
//   alert("form submitted");

// })

//Extracting Form Data......

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//   event.preventDefault();


  // let userinp = document.getElementById("user");
  //   let passinp = document.getElementById("pass");

  // console.dir(userinp);
  // console.dir(userinp.value);

  // console.log(passinp.value);



//   console.dir(form);
//   let user = this.elements[0];  //form.element[0]
//     let pass = this.elements[1];
  
//      console.log(user.value);

//   console.log(pass.value);  

// });

//Extracting Form Data......ended...............

// FORM EVENTS ended......................................................................................................//


// More Events:






