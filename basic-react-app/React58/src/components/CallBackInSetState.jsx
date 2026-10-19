import { useState } from "react";
export default function CallBackInSetState(){
        let [count,setCount]= useState(0);  //in initialization any type value can be passed including function 
            function incCount(){
                // setCount(count+1);
                // setCount(count+1); // here setCount is a asynchronous method,so it will not behave as intended. Inside these methods we use callback.
                // //if newState value is depended on previous state value then we use call back functions.

                setCount((currentCount)=>{
                    return currentCount+1;
                })
                 setCount((currentCount)=>{
                    return currentCount+1;
                })
                 setCount((currentCount)=>{
                    return currentCount+1;
                })

                //setCount(25); // component will re-render only when statevalue is changing if not React will not re-render the component. 

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