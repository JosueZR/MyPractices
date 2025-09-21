const todoInput = document.getElementById("inputText");
const addTaskBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");

function isValidation(task){
    let validation = true;
    taskError.textContent="";

    if(task === ""){
        validation = false;
        //alert("Hey! You need to add task");
        taskError.textContent = "This is an error!";
        
    }

    return validation;
}

function resgister(){
    let task = todoInput.value; //getting the value

    if(isValidation(task)){
        //create the HTML
        let li= document.createElement("li");
        li.innerHTML = `${task}`;
        taskList.appendChild(li);
        todoInput.value = ""; //clear the input
    }

}
function init(){
    // event handler
    addTaskBtn.addEventListener('click', resgister);

}

window.onload=init; // wat to render the HTML