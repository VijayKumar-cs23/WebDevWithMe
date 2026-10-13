export default function Button(){
   return (
    <div>
        <button onClick={greet}>Click</button>
    </div>
   )
}

function greet(){
    console.log("Hello!");
}