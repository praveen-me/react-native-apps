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
  currentTag: null
};

const tagsReducer = (state = initState, action) => {
  const setInitialTagValue = () => ({
    ...state,
    currentTag: null
  });

  switch (action.type) {
    case INIT_QUERY: {
      const {
        tags: {
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

    case CHANGE_TAG: {
      const { tagId } = action.payload;

      return {
        ...state,
        currentTag: tagId
      };
    }

    case CHANGE_CATEGORY:
      return setInitialTagValue();

    case SET_INITIAL_POSTS:
      return setInitialTagValue();

    default:
      return state;
  }
};

export default tagsReducer;
