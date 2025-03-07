let click = document.getElementById("button");
 click.addEventListener("click", function(){
    let check = document.createElement("input");
    check.type = "checkbox";
    document.body.appendChild(check);
 });
