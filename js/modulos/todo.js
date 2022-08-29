export default function initTodoList(){
const todoForm = document.querySelector('#todo-form')
const todoInput= document.querySelector('#todo-input')
const todoList= document.querySelector('#todo-list')
const editForm= document.querySelector('#edit-form')
const editInput= document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
let oldInputValue;


function creatTodo(text){
   const todo = document.createElement('div')
   todo.classList.add('todo')
   let todoH3 = document.createElement('h3')
    todoH3.innerText = text

   todo.appendChild(todoH3)

   const finishTodo = document.createElement('button')
   finishTodo.classList.add('finish-todo') 
   finishTodo.innerHTML = '<i class="fa-solid fa-check"></i>'
   todo.appendChild(finishTodo)

   const editTodo = document.createElement('button')
   editTodo.classList.add('edit-todo') 
   editTodo.innerHTML = '<i class="fa-solid fa-pen"></i>'
   todo.appendChild(editTodo)

   const removeTodo = document.createElement('button')
   removeTodo.classList.add('remove-todo') 
   removeTodo.innerHTML = '<i class="fa-solid fa-xmark"></i>'
   todo.appendChild(removeTodo)
   
   todoList.appendChild(todo)

   todoInput.value = ""
   todoInput.focus()
}

function saveTodo(e){
  e.preventDefault()
  const inputValue = todoInput.value
  if(inputValue){
    creatTodo(inputValue)
  }
}
todoForm.addEventListener('submit', saveTodo)


function toggleForm(){
  todoList.classList.toggle('hidden')
  editForm.classList.toggle('hidden')
  todoForm.classList.toggle('hidden')
}


let todoTitle;

function handleClick(e){

  const parentEl = e.target.closest('div')
  if(parentEl && parentEl.querySelector('h3')){
   todoTitle = parentEl.querySelector('h3').innerText
  }

  if(e.target.classList.contains('finish-todo')){
    parentEl.classList.toggle('done')
  }

  if(e.target.classList.contains('remove-todo')){
    parentEl.remove()
  }

  if(e.target.classList.contains('edit-todo')){
    toggleForm()

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }

}
cancelEditBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  toggleForm()

})


document.addEventListener('click', handleClick)






function updateTodo(text){

  const todos = document.querySelectorAll('.todo')

  todos.forEach((todo)=>{
     todoTitle = todo.querySelector('h3')
     if(todoTitle.innerText === oldInputValue){

      todoTitle.innerText = text

     }
  })

}

function handleEdit(e){
  e.preventDefault()
  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue)
  }
  toggleForm()
}


editForm.addEventListener('submit', handleEdit)

}


function resizeImg(){
  
  if(window.innerWidth > 1920){
    document.body.style.backgroundImage = "url('./img/imagemBackground.jpg')"
  }
}
resizeImg()


