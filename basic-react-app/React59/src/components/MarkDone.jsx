import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function MarkDone(){
    let [toDos,setToDos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewToDo]=useState("");

    let addNewTask = ()=>{
        setToDos((preToDos)=>{
            return [...preToDos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewToDo("");
    }
    let updateTodoValue = (event)=> {
       setNewToDo(event.target.value);
    }


    let deleteTodo = (id)=>{
      setToDos((preToDos)=>toDos.filter((preToDos)=>preToDos.id!=id));
    }

    // let UpperCaseAll = ()=>{
    //     setToDos(
    //     toDos.map((todo)=>{
    //         return{
    //             ...todo,task:todo.task.toUpperCase(),
    //         }
    //     })
    // );
    // }


    let MarkAllDone = ()=>{
        setToDos((prevToDos)=>
        prevToDos.map((todo)=>{
            return{
                ...todo,isDone:true,
            }
        })
    )
    }

    let MarkAsDone = (id)=>{
       setToDos((prevToDos)=>
        prevToDos.map((todo)=>{
            if(todo.id===id){
                return{
                ...todo,isDone:true,
            }
            }else{
                return todo;
            }
            
        })
    )
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
                                <span style={doTask.isDone?{textDecorationLine:"Line-through"}:{}}>{doTask.task}</span>
                                <button onClick={()=>deleteTodo(doTask.id)}>Delete</button>
                                <button onClick={()=>MarkAsDone(doTask.id)}>Mark As Done</button>

                             </li>
                    })
                }
            </ul>
            <button onClick={MarkAllDone}>Mark All Done</button>

        </div>
    )
}