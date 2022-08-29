export default function initSearch(){


}
const search = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const optionsTodo = document.querySelectorAll('#filter-select')

let todoTitle

function initSearchOnkeyUp(){
search.addEventListener('keyup', (e)=>{
  e.preventDefault()
  const todos = document.querySelectorAll('.todo')
  todos.forEach((todo)=>{
    todoTitle = todo.querySelector('h3')
    todo.classList.remove('hidden')
    if(!todoTitle.innerText.includes(searchInput.value)){
      todo.classList.add('hidden')
    }
    
  })
})
}
initSearchOnkeyUp()


function initCleanSearch(){
function cleanSearch(){
  const todos = document.querySelectorAll('.todo')
  todos.forEach((todo)=>{
  if(todo.classList.contains('hidden'))
  todo.classList.remove('hidden')
})
}

search.addEventListener('submit', (e)=>{
  e.preventDefault()
  searchInput.value = ''
  cleanSearch()
  
})
}
initCleanSearch()


function initFilterTodo(){
function filterTodo(optionValue){
  const todos = document.querySelectorAll('.todo')
  todos.forEach((todo)=>{
    
    if(todo.classList.contains('hidden-filter')){
      todo.classList.remove('hidden-filter')
    }
    if(optionValue === 'all'){
      todo.classList.remove('hidden-filter')
    }
    if(optionValue === 'done' && !todo.classList.contains('done')){
      todo.classList.add('hidden-filter')
    }
    if(optionValue === 'todo' && todo.classList.contains('done')){
      todo.classList.add('hidden-filter')
    }
  })
}

optionsTodo.forEach((option)=>{
  option.addEventListener('change', (e)=>{
    filterTodo(option.value)

  })
})
}
initFilterTodo()
  