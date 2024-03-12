import {v4 as uuid4} from 'uuid'; // 'as' a keyword when importing modules

// Internal imports
import { category, Managing} from './types';

// Our task class
export class Task {

    private _id: string;

    constructor(
        public name: string,
        public description: string,
        pubilc deadline: Date,
        public category: Category
){
    this._id = uuid4();
}

    get id(): string{
        return this._id
    }
    }


// Task manager class
export class TaskManager implements Managing<Task | string>{

    public task: Task[] = []



    public addTask(Task: Task): void {
        this.task.push(task);
        this.updateTaskList();
        // Add update UI
    }

    public removeTask(taskId: string): void {
        
        //fine the task index based on the tasl id
        const index = this.task.findIndex((task) => task.id == taskId) // Loops through task list for tasks in tasks, ID that matches return index
        if (index !== -1) {
            this.task.splice(index, 1)
        }
        // Add and update UI after task is removed
        this.updateTaskList();
    }

    private updateTaskList(){

        const container = document.getElementById('task') as HTMLElement;


        // clears existing list
        container.innerHTML="";



        // Looping through the task list and creating a html element for each
        this.task.forEach( task => {

            // making an html task card
            const taskcard = `
            
                <div class="card mb-3 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${task.name}</h5>
                        <p class="card-text-text">Description: ${task.description}</p>
                        <p class="card-text-text">Deadline: ${task.deadline}</p>
                        <p class="card-text">Category: ${task.category}</p>
                        <button type="submit" class="btn-danger btn-sm" data-task=${task.id}>Remove</button>
                    </div>
                </div>
            `

            // Append the task card to our html variable
            container.insertAdjacentHTML('beforeEnd', taskcard)
        });

        // Adding an event listener to removal button to every single remeove button using DOM
        let allButton =  container.querySelectorAll(".btn-danger")
        allButton.forEach ( button => {
            button.addEventListener('Submit', () => {
                // Grab the ID
                const taskId = button.getAttribute('data-task');
                if (taskId) {
                    this.removeTask(taskId);
                }
            })
        })

    }

}
    