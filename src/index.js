document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    const newNode = document.createElement("li")
    const task = document.getElementById('tasks').appendChild(newNode)
    const input = document.getElementById('new-task-description').value
    task.innerHTML = input
    const priority = document.getElementById('priority').value
    switch (priority) {
      case "High":
        task.style.color = "red"
      break;
      case "Medium":
        task.style.color = "orange"
      break;
      case "Low":
        task.style.color = "green"
      break;
      default:
        task.style.color = "black"
    }
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    task.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(){
      task.remove()
    })
  })
});
