class TodoList {
  constructor(form, input, ul) {
    this.form = document.getElementById(form);
    this.input = document.getElementById(input);
    this.todoList = document.getElementById(ul);

    this.setupEventListners();
    this.showTodo();
  }

  setupEventListners() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    this.todoList.addEventListener("click", (e) => this.checkTodo(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    // grab onto value in input
    const task = this.input.value.trim();

    // check if input is empty
    if (!task) return;
    else this.addTask(task);

    // reset input
    this.input.value = "";
  }

  addTask(task) {
    // create a new task
    const li = document.createElement("li");
    li.textContent = task;
    this.todoList.appendChild(li);

    const span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);

    this.saveData();
  }

  checkTodo(e) {
    // console.log(e.target);

    // checked what was clicked on inside of ul
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      this.saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      this.saveData();
    }
  }

  saveData() {
    localStorage.setItem("data", this.todoList.innerHTML);
  }

  showTodo() {
    this.todoList.innerHTML = localStorage.getItem("data");
  }
}

const todo = new TodoList("form", "todo-input", "list-container");
