import { ADD_TODO } from "../types";

export const addTodo = (todoData) => {
  return {
    type: ADD_TODO,
    payload: todoData
  }
};