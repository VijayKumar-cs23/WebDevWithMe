import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UniqueIdForList(){
    let [toDos,setToDos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewToDo]=useState("");

    let addNewTask = ()=>{
        setToDos([...toDos,{task:newTodo,id:uuidv4()}]);
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
                       return <li key={doTask.id}>{doTask.task}</li>
                    })
                }
            </ul>
        </div>
    )
}