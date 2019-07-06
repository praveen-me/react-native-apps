import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETE } from "../types";

const initState = {
  todos: []
}

const rootReducer = (state = initState, action) => {  
  switch (action.type) {
    case ADD_TODO : {
      return {
        todos: [...state.todos, action.payload]
      }
    }

    case REMOVE_TODO : {
      return {
        todos: state.todos.filter( ( v, id ) => id !== action.payload )
      }
    }

    case TOGGLE_TODO_COMPLETE : {
      const todos = [...state.todos];
      
      todos[action.payload].isCompleted = !todos[action.payload].isCompleted;
      
      return {
        todos
      }
    }
    
    default: return state;
  }
};

export default rootReducer;