import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETE, REMOVE_ALL_TODOS } from "../types";

export const addTodo = (todoData) => {
  return {
    type: ADD_TODO,
    payload: todoData
  }
};

export const removeTodo = ( todoId ) => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  }
};

export const todoToggleComplete = ( todoId ) => {
  return {
    type: TOGGLE_TODO_COMPLETE,
    payload: todoId
  }
}

export const removeAllTodos = () => ({ type: REMOVE_ALL_TODOS });