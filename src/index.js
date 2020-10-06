
        
document.addEventListener("DOMContentLoaded", function() {
  function removeTask(e){

    let blah = document.getElementById(e.target.id)
    console.log(blah)
    blah.parentNode.remove()
    }

  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let task = document.querySelector("#new-task-description").value
    let li = document.createElement('li')
    let remove = document.createElement('button')
    console.log(remove)
    remove.setAttribute("id", `${task}`)
    remove.innerText = "X"
    li.innerText = `${task}           `
    let ul = document.querySelector("#tasks")
    remove.addEventListener("click", removeTask)
    li.append(remove)
    ul.append(li)
    
  })

});
