const textInput = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const form = document.getElementById('tasks__form');

const TASKS_KEY = 'tasks';

function createTask(inputValue){
    if (inputValue !==''){
        const task = document.createElement('div');
        task.classList.add('task')
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = inputValue;
        const removeBtn = document.createElement('a');
        removeBtn.href ="#";
        removeBtn.classList.add('task__remove');
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            task.remove();
            saveTasksToLocalStorage();
        });
        task.appendChild(taskTitle);
        task.appendChild(removeBtn);
        taskList.appendChild(task);
        textInput.value='';
        saveTasksToLocalStorage();
    }
    
}
function saveTasksToLocalStorage() {
    const tasks = [];
    const taskTitles = taskList.querySelectorAll('.task__title');
    taskTitles.forEach(taskTitle => {
        tasks.push({ title: taskTitle.textContent });
    });
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    console.log('save');
}

function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem(TASKS_KEY);
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        console.log(tasks);
        tasks.forEach(taskData => {
             createTask(taskData.title);
        });
    }
}

btnAdd.addEventListener("click", ()=>{

    createTask(textInput.value.trim());
});

textInput.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        createTask(textInput.value.trim());
    }
})

loadTasksFromLocalStorage();