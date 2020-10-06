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

  li.innerText = newTask;

  div.append(li)

  const tasks = document.getElementById('tasks')
  tasks.append(div)
}

