//  Event Bubbling : if you have nested element and for every element have a diffrent event listener, some how if the inner element was triggered then all the parent will automatically selected this phinomina is called as Event Bubbling
//          to fix the event bubbling we have a mehtod named as 'stopPropagation()' 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function(event){
//     // event.stopPropagation(); 
//     console.log("ul was clicked");
// })

//     for(li of lis){
//        li.addEventListener("click",function(){
//             // event.stopPropagation(); 
//             console.log("li was clicked");
//         });
//     }

// Event Bubbling ENDED................................................................................................//

// // Building ToDo with DOM Started
// let  btn = document.querySelector("button");
// let  inp = document.querySelector("input");
// let  ul = document.querySelector("ul");

// btn.addEventListener("click",function(){
//     // console.log(inp.value);
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     let removebtn = document.createElement("button");
//     removebtn.innerText="Remove";
//     removebtn.classList.add("remove");
//     item.appendChild(removebtn);
//     ul.appendChild(item);
//     inp.value="";
// });

// let removebtns = document.querySelectorAll(".remove");
// for(let removebtn of removebtns){
//   removebtn.addEventListener("click",function(){
//   let parentRemove = removebtn.parentElement;
// //   console.log(parentRemove);
//    parentRemove.remove();
// });

// }


//Event Deligation: if you have created a new element(button) in our page but for same element a eventlistener has already defined.
// so that already defined Eventlistener will not be applicable for new generated element.

// ul.addEventListener("click",function(event){

//     // console.log(event.target); //target for which action changes are made. 
//     //console.dir(event.target.nodeName);

//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//     }

// })


// JavaScipt is a Single threaded


// CallBackHell in JS Started
//let h1 = document.querySelector("h1");

// setTimeout(()=>{
//    h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//    h1.style.color = "blue";
// },2000);
// setTimeout(()=>{
//    h1.style.color = "green";
// },3000);


// function colorChange(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// colorChange("red",1000,()=>{
//   colorChange("blue",1000,()=>{
//     colorChange("green",1000,()=>{
//     colorChange("orange",1000,()=>{
//     colorChange("beige",1000);
//   });
//   }) ;
//   });
// });


// NOTE:To overcome callBackHell we use promises.

// //Setting up for Promises.
 
// function saveToDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// saveToDB("InserStatement!",()=>{
//     console.log("Success: Your data was saved.");
//     saveToDB("data2",()=>{
//         console.log("Success: Your data2 was saved.");
//         saveToDB("data3",()=>{
//         console.log("Success: Your data3 was saved.");
//     },()=>{
//         console.log("Failure: connection failed, data3 was not saveToDB.");
//     })
//     },()=>{
//         console.log("Failure: connection failed, data2 was not saveToDB.");
//     })
// },()=>{
//     console.log("Failure: connection failed, data was not saveToDB.");
// });
 





function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success: Your data was saved.");
        } else {
            reject("Failure: Connection failed, data was not saved.");
        }
    });
}


// saveToDB("add task")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// with help of promise chaining.
saveToDB("addTask.")
    .then(()=>{
        console.log("Task1Added");
        return saveToDB("Task2Added.");
    })
    .then(()=>{
        console.log("Task2Added.");
        return saveToDB("task3Added");
    })
    .then(()=>{
        console.log("Task3Added");
    })
.catch(()=>{
    console.log("last task was regected.");
})




