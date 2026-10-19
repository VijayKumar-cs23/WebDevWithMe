import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function DeletionInArray(){
    let [toDos,setToDos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewToDo]=useState("");

    let addNewTask = ()=>{
        setToDos((preToDos)=>{
            return [...preToDos,{task:newTodo,id:uuidv4()}]
        });
        setNewToDo("");
    }
    let updateTodoValue = (event)=> {
       setNewToDo(event.target.value);
    }


    let deleteTodo = (id)=>{
      setToDos((preToDos)=>toDos.filter((preToDos)=>preToDos.id!=id));
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
                       return <li key={doTask.id}>
                                <span>{doTask.task}</span>
                                <button onClick={()=>deleteTodo(doTask.id)}>Delete</button>
                             </li>
                    })
                }
            </ul>
        </div>
    )
}