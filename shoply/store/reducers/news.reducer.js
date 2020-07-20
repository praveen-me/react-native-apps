import {
  INIT_QUERY,
  SET_POSTS,
  GET_NEXT_SET_OF_POSTS,
  SET_INITIAL_POSTS
} from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: false
};

const newsReducer = (state = initState, action) => {
  const setPostsData = (actionType, initial) => {
    const {
      posts: {
        edges,
        pageInfo: { endCursor, hasNextPage }
      }
    } = actionType.payload;

    return {
      ...state,
      data: initial ? edges : [...state.data, ...edges],
      endCursor,
      nextPage: hasNextPage
    };
  };

  switch (action.type) {
    case INIT_QUERY: {
      const {
        posts: {
          edges,
          pageInfo: { endCursor, hasNextPage }
        }
      } = action.payload;

      return {
        ...state,
        data: edges,
        endCursor,
        nextPage: hasNextPage
      };
    }

    case SET_POSTS: {
      const {
        posts: {
          nodes,
          pageInfo: { endCursor, hasNextPage }
        },
        fetchedFirstTime
      } = action.payload;

      return {
        ...state,
        data: fetchedFirstTime ? nodes : [...state.data, ...nodes],
        endCursor,
        nextPage: hasNextPage
      };
    }

    case GET_NEXT_SET_OF_POSTS: {
      return setPostsData(action, false);
    }

    case SET_INITIAL_POSTS: {
      return setPostsData(action, true);
    }

    default:
      return state;
  }
};

export default newsReducer;
