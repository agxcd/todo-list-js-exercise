// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const task3 = newTask("Make bed", "😨");
const tasks = [task1, task2, task3];

task1.logState();
task3.markCompleted();
task3.logState();
console.log(task1.title);
task1.markCompleted();
task1.logState();
