function create_task(){
    let tasklist = document.getElementById("task-list");
    let taskinput = document.getElementById("taskinput");
    let newtask = document.createElement("li");
    newtask.textContent = taskinput.value;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    newtask.appendChild(checkbox);
    newtask.appendChild(remove);
    tasklist.appendChild(newtask);
    taskinput.value = "";
    checkbox.addEventListener("click" , function(){
        if (checkbox.checked){
            newtask.style.textDecoration = "line-through";
        }
        else{
            newtask.style.textDecoration = "none";
        }
    });
    remove.addEventListener("click" , function(){
        tasklist.removeChild(newtask);
    });
}
