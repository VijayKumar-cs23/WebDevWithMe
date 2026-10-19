//Leaning:Objects and State
import { useState } from "react";
export default function LudoBoard(){
    let [move,setMove]=useState({red:0,blue:0,green:0,yellow:0});
    let updateBlue = ()=>{
        move.blue += 1;
        console.log(`move.blue = ${move.blue}`)
        //setMove(move);//we know component will only re-render when state changes but here changes in only one blue obj value, react is not considering it changes in objects so no any changes will appear in display(UI).
        //setMove(...move); //so we use spread operator it will make a new copy of obj and react will re-render the programe.

        setMove((prevMove)=>{
            return {...prevMove}
        })
    }

    let updateRed = ()=>{
        move.red += 1;
    
        setMove((prevMove)=>{
            return {...prevMove}
        })
    }

    let updateGreen = ()=>{
        move.green += 1;
    
        setMove((prevMove)=>{
            return {...prevMove}
        })
    }

    let updateYellow = ()=>{
        move.yellow += 1;
    
        setMove((prevMove)=>{
            return {...prevMove}
        })
    }
    return (
        <div>
            <p>Game Begins!</p>
            <div className="Board">
                <p>Red Move ={move.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button> 

                {/* Why do we use double curly braces {{ }}?
                Outer { }: Tells JSX that you are writing a JavaScript expression.
                Inner { }: Creates a JavaScript object containing CSS properties.   */}

                <p>Blue Move ={move.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Green Move ={move.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen} >+1</button>

                <p>Yellow Move ={move.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
}