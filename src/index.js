document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let new_task = document.querySelector("#new-task-description").value 
    createNewTask(new_task);
    form.reset();
  })

  function createNewTask(new_task) {
    let li = document.createElement("li");
    li.innerText = new_task
    let ul = document.querySelector("#tasks")
    ul.append(li);
  }
});

