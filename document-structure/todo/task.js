const textInput = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const form = document.getElementById('tasks__form');

const TASKS_KEY = 'tasks';

function createTask(inputValue){
    if (inputValue !==''){

        taskList.insertAdjacentHTML('beforeend', `
            <div class="task">
              <div class="task__title">
                ${inputValue}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
            `);
        
        textInput.value='';
        saveTasksToLocalStorage();
    }
    
}

taskList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('task__remove')){
        event.preventDefault();
        const task  = event.target.closest('.task');
        task.remove();
        saveTasksToLocalStorage();
    }
})


function saveTasksToLocalStorage() {
    const tasks = [];
    const taskTitles = taskList.querySelectorAll('.task__title');
    taskTitles.forEach(taskTitle => {
        tasks.push({ title: taskTitle.textContent });
    });
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    
}

function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem(TASKS_KEY);
    console.log(savedTasks);
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(taskData => {
             createTask(taskData.title);
        });
    }
}

btnAdd.addEventListener("click", (event)=>{
    event.preventDefault();
    createTask(textInput.value.trim());
});

loadTasksFromLocalStorage();