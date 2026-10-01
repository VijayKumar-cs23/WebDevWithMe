let todo = [];
let req = prompt("what you would like to do?");
while(true){
    if(req == "quite"){
        console.log("You have quite the app");
        break;
    }
    if(req === "list"){ 
        console.log("**********");
        for(let i= 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("**********");
    }else if(req === "add"){
        let task =prompt("Please enter the tasks to add :");
        todo.push(task);
        console.log("Task added successfully");
    
    }else if(req==="delete"){
        let idx = prompt("enter the index of task to delete :");
        todo.splice(idx,1);
        console.log("Task deleted successfully");
    }
}