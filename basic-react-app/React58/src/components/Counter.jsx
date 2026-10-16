 import {useState} from "react";
export default function Counter(){
    let [count,setCount]= useState(0);
    function incCount(){
        setCount(count+1);
    }
    function decCount(){
        if(count>0){
           setCount(count-1);
        }
        
    }
    return(
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={incCount}>IncButton</button>
            <button onClick={decCount}>DecButton</button>
        </div>
    )
}
