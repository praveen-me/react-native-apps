import { ADD_TODO, REMOVE_TODO } from "../types";

export const addTodo = (todoData) => {
  return {
    type: ADD_TODO,
    payload: todoData
  }
};

export const removeTodo = ( todoId ) => {
  console.log(todoId)
  
  return {
    type: REMOVE_TODO,
    payload: todoId
  }
};