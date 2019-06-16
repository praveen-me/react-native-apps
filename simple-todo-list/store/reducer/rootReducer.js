import { ADD_TODO } from "../types";

const initState = {
  todos: []
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  
  switch (action.type) {
    case ADD_TODO : {
      return {
        todos: [...state.todos, action.payload]
      }
    }
    
    default: return state;
  }
};

export default rootReducer;