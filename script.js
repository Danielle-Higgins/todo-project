// const userInput = document.querySelector("input")
// const addButton = document.querySelector(".add-button")
// const todos = document.querySelector(".task-container")

// function addTask() {
//     // create a new task
//     const task = document.createElement("div")
//     task.classList.add("task")

//     // if user doesnt input anything, break out of function
//     if (userInput.value === "") {
//         alert("Please enter a task first!")
//         return
//     }

//     // create paragraph to house value of input
//     const para = document.createElement("p")
//     para.textContent = userInput.value
//     task.appendChild(para)

//     // create a check mark button
//     const check = document.createElement("button")
//     check.classList.add("check-mark")
//     check.innerHTML = " &#10003;"
//     task.appendChild(check)

//     // create a trash can button
//     const trash = document.createElement("button")
//     trash.classList.add("trash-can")
//     trash.innerHTML = "&#128465;"
//     task.appendChild(trash)

//     todos.appendChild(task)

//     // reset the input
//     userInput.value = ""

//     check.addEventListener("click", () => {
//         para.style.textDecoration = "line-through"
//     })

//     trash.addEventListener("click", () => {
//         task.remove()
//     })
// }

// addButton.addEventListener("click", addTask)
