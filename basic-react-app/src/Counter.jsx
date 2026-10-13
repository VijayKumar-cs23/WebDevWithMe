import React, {useState} from "react";
const app = () => {
    const [counter, setCounter] = useState(0);
    function increaseCounter(){
        setCounter(counter+1);
    }

return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}
export default app;
