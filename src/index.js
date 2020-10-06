document.addEventListener("DOMContentLoaded", function() {
  // your code here
  const form = document.querySelector('form')

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    //console.log(e)
    const newTask = document.getElementById('new-task-description').value;

    createTask(newTask);
    form.reset()
  })
});

function createTask(newTask) {
  const div = document.createElement('div');
  const li = document.createElement('li');
  const deleteTask = document.createElement('input')
  const tasks = document.getElementById('tasks')

  deleteTask.type = 'submit'
  deleteTask.value = 'Delete Task'
  li.innerText = newTask;

  // li.append(deleteTask)
  div.append(li, deleteTask)
  tasks.append(div)

  deleteTask.addEventListener('click', function(e){
    console.log(e)
    div.remove();
  })
}

