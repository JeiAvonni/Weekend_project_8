// Internal imports
import { category } from "./types";
import { Task, TaskManager, TaskManager } from "./Taskmanager";

// Grab form so it can have a event listener attached to it
let taskForm = document.getElementById('taskForm') as  HTMLFormElement // as is being used as a type alias to define our type

// Instantianting the TaskManager
const TaskManager = new TaskManager()

taskForm.addEventListener('submit', () => {
    event?.preventDefault(); // Prevents the default behaviot for our event


    // Grabbing all of the form data
    const taskNameInput = document.getElementById ('taskName') as HTMLFormElement;
    const descriptionInput = document.getElementById('description') as HTMLFormElement;
    const deadlineInput = document.getElementById('deadline') as HTMLFormElement;
    const categoryInput = document.getElementById('category') as HTMLFormElement;

    // grab the values
    let taskName = taskNameInput.value;
    let description = descriptionInput.value;
    let deadline = new Date(deadlineInput.value);
    let category = categoryInput.value;


    console.log(taskName, description, deadline, category)

    // Coming back to add code
    const newTask = new Task(taskName, description, deadline, category) as category

    TaskManager.addTask(newTask);

    taskForm.rest();
})