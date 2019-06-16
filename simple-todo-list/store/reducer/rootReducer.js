import { ADD_TODO, REMOVE_TODO } from "../types";

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
    
    default: return state;
  }
};

export default rootReducer;