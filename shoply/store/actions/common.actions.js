import { INIT_QUERY, SET_POSTS } from '../types';

export const simpleAction = data => (dispatch) => {
  dispatch({
    type: INIT_QUERY,
    payload: {
      ...data
    }
  });
  return Promise.resolve(true);
};

export const setPosts = ({ category, tag }, fetchedFirstTime) => (dispatch) => {
  dispatch({
    type: SET_POSTS,
    payload: {
      posts: category ? category.posts : tag.posts,
      fetchedFirstTime
    }
  });

  return Promise.resolve(true);
};
