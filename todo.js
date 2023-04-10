const addTaskButton = document.getElementById("addButton");
const inputTask = document.getElementById("taskInput");

//function listen for click on "add task" button
addTaskButton.addEventListener('click', () =>{
    console.log("click working");
    createNewTask();
    clearInputText();
});

//function clear input text
function clearInputText(){
    taskInput.value="";
    console.log("clearing");
}

//function add p and buttons
function createNewTask(){
    let taskParagraph = document.createElement('p');
    let taskDiv = document.createElement('div');
    let taskButton = document.createElement('div');
    let taskCheckmark = document.createElement('button');
    let taskCross = document.createElement('button');

    taskParagraph.classList.add('taskText');
    taskDiv.classList.add('task');
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

    console.log("create new task working");

    //function checkmark -> line over text
    taskCheckmark.addEventListener('click', () =>{
        taskParagraph.style.textDecoration = "line-through";
    });

    //function remove -> remove
    taskCross.addEventListener('click', () =>{
        taskList.removeChild(taskDiv);
        taskDiv.removeChild(taskParagraph);
        taskDiv.removeChild(taskButton);
        taskButton.removeChild(taskCheckmark);
        taskButton.removeChild(taskCross);
    });
}

//function storage

// https://www.youtube.com/watch?v=-pRg_daFjfk