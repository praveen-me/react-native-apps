import { SET_SEARCH_DATA } from '../types';

const initState = {
  query: '',
  cursor: '',
  hasPrevPage: false,
  posts: [],
  prevQueries: []
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA: {
      const {
        query,
        nodes,
        pageInfo: { hasPreviousPage, startCursor },
        replacePost
      } = action.payload;

      const prevQueries = [...state.prevQueries];

      if (!prevQueries.includes(query)) {
        prevQueries.push(query);
      }

      return {
        ...state,
        query,
        prevQueries,
        hasPrevPage: hasPreviousPage,
        cursor: startCursor,
        posts: replacePost ? nodes : [...state.posts, ...nodes]
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
