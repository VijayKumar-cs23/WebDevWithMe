import {useState} from "react";


export default function ToDoList(){
    let [toDos,setToDos]=useState(["sample task"]);
    let [newTodo,setNewToDo]=useState("");

    let addNewTask = ()=>{
        setToDos([...toDos,newTodo]);
        setNewToDo("");
    }
    let updateTodoValue = (event)=> {
       setNewToDo(event.target.value);
    }
    return(
        <div>
            <h3>ToDoList</h3>
            <input type="text" value={newTodo} onChange={updateTodoValue} placeholder="Add Your Task..." />
            <button onClick={addNewTask}>Add</button>
            <hr />
            <h4>Added Tasks</h4>
            <ul>
                {
                    toDos.map((doTask)=>{
                       return <li>{doTask}</li>
                    })
                }
            </ul>
        </div>
    )
}