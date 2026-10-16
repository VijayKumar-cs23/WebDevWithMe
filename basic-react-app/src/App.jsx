import "./App.css"
import Title from "./Titile.jsx"
import ProductTab from "./ProductTab.jsx"
import Button from "./Button.jsx"
import Counter from "./Counter" 
import LikeButton from "./LikeButton.jsx"


// //creating new Component and rendering to another component. two ways to render 1. <Title></Title>  or <Title/>


// function Description(){
//    return (
//     <div>
//         <h2>I am the description 1</h2>
//         <h3>I am the description 2</h3>
//     </div>
//    )
// }

// function App() {
//   return (
//     <>
//       <h1>HelloWorld!</h1>
       
//        <Title></Title>
//        <Description/>
//       <Title/>

//       <button>ClickHere!</button>
//     </>
//   )
// }

// export default App



function App() {
  return (
    <>
    {/* <ProductTab/> */}
    {/* <Button/> */}
    {/* <Counter/> */}
    <LikeButton/>
    </>
  )
}

export default App