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
        todos: state.todos.filter( ( v, id ) => v.id !== action.payload )
      }
    }

    case TOGGLE_TODO_COMPLETE : {
      const todos = [...state.todos];
      let itemId = null;

      todos.find((v, i) => {
        if( v.id === action.payload ) {
          itemId = i;
        };
      });

      todos[itemId].isCompleted = !todos[itemId].isCompleted;
      
      return {
        todos
      }
    }
    
    default: return state;
  }
};

export default rootReducer;