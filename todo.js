const addTaskButton = document.getElementById("addButton");
const inputTask = document.getElementById("taskInput");
const taskListMemory = [];

let taskDone = false;

//function get storage
//getTaskStorage();

//function listen for click on "add task" button
addTaskButton.addEventListener('click', () =>{
    if(inputTask.value.length > 0){
        setTaskStorage();
        createNewTask();
        clearInputText();
}});

//function clear input text
function clearInputText(){
    taskInput.value="";
}

//function add p and buttons
function createNewTask(){
    let taskParagraph = document.createElement('p');
    let taskDiv = document.createElement('div');
    let taskButton = document.createElement('div');
    let taskCheckmark = document.createElement('button');
    let taskCross = document.createElement('button');

    // the following 6 lines were conducted from https://www.youtube.com/watch?v=vnNQaKXXJiU
    taskParagraph.classList.add('taskText');
    taskDiv.classList.add('task');
    taskDiv.id = new Date().getTime();
    // 5 lines samira
    /* if (id === ""){
    taskDiv.id = new Date().getTime();
    } else{
    taskDiv.id = id;
    }  */
    taskButton.classList.add('buttons');
    taskCheckmark.classList.add('checkmark');
    taskCross.classList.add('cross');
    taskParagraph.innerText = inputTask.value;

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
        let taskDone = true;
    });

    //function remove -> remove
    taskCross.addEventListener('click', () =>{
        taskList.removeChild(taskDiv);
        removeFromStorage(taskDivId);

        /* taskDiv.removeChild(taskParagraph);
        taskDiv.removeChild(taskButton);
        taskButton.removeChild(taskCheckmark);
        taskButton.removeChild(taskCross);
        can be removed */
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

    setTaskStorage(taskDivId, taskString);

    console.log(task);
}

//function storage
 function setTaskStorage(taskDivId, taskString){
    localStorage.setItem(taskDivId, taskString);
    //console.log(taskString);
}

/* function getTaskStorage(taskString){
    localStorage.getItem('task');
}  */

//function remove object from storage
function removeFromStorage(taskDivId){
    localStorage.removeItem(taskDivId);
}