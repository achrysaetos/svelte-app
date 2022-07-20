import { writable } from "svelte/store";

export const todos = writable([])

export const addTodo = (text) => {
  todos.update((cur)=>{
    const newTodos = [...cur, {text, completed:false, id:Date.now()}]
    return newTodos
  })
}

export const delTodo = (id) => {
  todos.update(todos => todos.filter(todo => todo.id !== id))
}

export const toggle = (id) => {
  todos.update(todos => {
    let index = -1
    for(let i=0; i<todos.length; i++){
      if(todos[i].id === id){
        index = i
        break
      }
    }
    if(index !== -1){
      todos[index].completed = !todos[index].completed;
    }
    return todos
  })
}