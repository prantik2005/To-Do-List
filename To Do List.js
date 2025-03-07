function create_task(){
    let tasklist = document.getElementById("task-list");
    let taskinput = document.getElementById("taskinput");
    let newtask = document.createElement("li");

    let tasktext = document.createElement("span");
    tasktext.textContent = taskinput.value;

    if(tasktext.textContent==""){
        alert("Task Cannot Be Empty");
        remove.tasktext.textContent;
    }

    let remove = document.createElement("button");
    remove.classList.add("remove-button");
    remove.textContent = "REMOVE";

    newtask.appendChild(tasktext);
    newtask.appendChild(remove);
    
    tasklist.appendChild(newtask);
    taskinput.value = "";
    
    remove.addEventListener("click" , function(){
        tasklist.removeChild(newtask);
    });
}