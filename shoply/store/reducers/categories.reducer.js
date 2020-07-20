import {
  INIT_QUERY,
  CHANGE_CATEGORY,
  CHANGE_TAG,
  SET_INITIAL_POSTS
} from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: false,
  currentCategory: null
};

const categoriesReducer = (state = initState, action) => {
  const setInitialCategoryValue = () => ({
    ...state,
    currentCategory: null
  });

  switch (action.type) {
    case INIT_QUERY: {
      const {
        categories: {
          edges,
          pageInfo: { endCursor, hasNextPage }
        }
      } = action.payload;

      return {
        data: edges,
        endCursor,
        nextPage: hasNextPage
      };
    }

    case CHANGE_CATEGORY: {
      const { categoryId } = action.payload;
      return {
        ...state,
        currentCategory: categoryId
      };
    }

    case CHANGE_TAG:
      return setInitialCategoryValue();

    case SET_INITIAL_POSTS:
      return setInitialCategoryValue();

    default:
      return state;
  }
};

export default categoriesReducer;
