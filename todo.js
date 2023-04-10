const addTaskButton = document.getElementById("addButton");
const inputTask = document.getElementById("taskInput");
const taskListMemory = [];

let taskDone = false;

//function get storage
getTaskStorage(taskListMemory);

//function listen for click on "add task" button
addTaskButton.addEventListener('click', () =>{
    if(inputTask.value.length > 0){
        createNewTask("", inputTask.value, false, false);
        clearInputText();
}});

//function clear input text
function clearInputText(){
    taskInput.value="";
}

//function add p and buttons
function createNewTask(id, taskName, checkmark, fromStorage){
    let taskParagraph = document.createElement('p');
    let taskDiv = document.createElement('div');
    let taskButton = document.createElement('div');
    let taskCheckmark = document.createElement('button');
    let taskCross = document.createElement('button');

    // the following 6 lines were conducted from https://www.youtube.com/watch?v=vnNQaKXXJiU
    taskParagraph.classList.add('taskText');
    taskDiv.classList.add('task');
    //the following 5 lines were adapted by the help of Samira Leonhardt
    if (id === ""){
    taskDiv.id = new Date().getTime();
    } else{
    taskDiv.id = id;
    }  
    taskButton.classList.add('buttons');
    taskCheckmark.classList.add('checkmark');
    taskCross.classList.add('cross');
    taskParagraph.innerText = taskName;

    taskList.appendChild(taskDiv);
    taskDiv.appendChild(taskParagraph);
    taskDiv.appendChild(taskButton);
    taskButton.appendChild(taskCheckmark);
    taskCheckmark.innerText = "✅";
    taskButton.appendChild(taskCross);
    taskCross.innerText = "❌";

    //function checkmark -> line over text
    taskCheckmark.addEventListener('click', () =>{
        taskParagraph.style.textDecoration = "line-through";
    });

    //function remove -> remove
    taskCross.addEventListener('click', () =>{
        taskList.removeChild(taskDiv);
        removeFromStorage(taskDivId);
    });

    //function creating object
    //the following 4 lines were adapted by the help of Samira Leonhardt
    let taskDivId = taskDiv.id;
    let task = {
        taskName : inputTask.value,
        checkmark : taskDone,
        id : taskDivId,
    }

    let taskString = JSON.stringify(task);

    if(fromStorage === false){
    setTaskStorage(taskDivId, taskString);
    }

    console.log(task);
}

//function storage
 function setTaskStorage(taskDivId, taskString){
    localStorage.setItem(taskDivId, taskString);
}

 function getTaskStorage(taskListMemory){
    // the following 9 lines were adapted by the help of Samira Leonhardt
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while(i--){
        taskListMemory.push(localStorage.getItem(keys[i]));
    }
    taskListMemory.forEach((task)=>{
    let jsonTask = JSON.parse(task);
    createNewTask(jsonTask["id"], jsonTask["taskName"], jsonTask["checkmark"], true);
    });
}  

//function remove object from storage
function removeFromStorage(taskDivId){
    localStorage.removeItem(taskDivId);
}