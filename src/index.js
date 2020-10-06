document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('form')
  console.log('this is my form', form)

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const task = document.querySelector('#new-task-description').value

    createTask(task)
    form.reset()
  })

  function createTask(task){
  const div = document.createElement('div')
  const li = document.createElement('li')
  const button = document.createElement('button')

  button.addEventListener('click', function(){
    console.log('click works')
    li.remove()
  })

  button.innerText = 'X'

  li.innerText = task
  li.append( button)
  div.append(li)

  const l = document.querySelector('#tasks')
  l.append(div)
  }
});
