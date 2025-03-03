function create_task(){
    let tasklist = document.getElementById("task-list");
    let taskinput = document.getElementById("taskinput");
    let newtask = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-button");

    let tasktext = document.createElement("span");
    tasktext.textContent = taskinput.value;

    let remove = document.createElement("button");
    remove.classList.add("remove-button");
    remove.textContent = "REMOVE";

    newtask.append(checkbox);
    newtask.appendChild(tasktext);
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
