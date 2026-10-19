import { useState } from "react";
export default function ArrayAndState(){
    let [arr,setArr]=useState(["Empty"]);
    let updateArr=()=>{
    //    arr.push("next Ele");  // here we are just add the elements in array and it will not return a new arr with diffrent address so react will not consider it to re-render.
    //    setArr(arr);
    //    console.log(arr);


    //    setArr([...arr,"next Ele"]);
    //    console.log(arr);

    setArr((preArr)=>{
        return[...preArr,"next Ele"]
      });
       console.log(arr);

    }
    return(
        <div>
         <p>UpdatedArr ={arr}</p>
         <button onClick={updateArr}>Click</button>

        </div>
    )
}










