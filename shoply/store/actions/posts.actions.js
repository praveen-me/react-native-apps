import { GET_NEXT_SET_OF_POSTS, SET_INITIAL_POSTS } from '../types';

const setPosts = (data, actionType) => (dispatch) => {
  dispatch({
    type: actionType,
    payload: {
      posts: data.posts
    }
  });

  return Promise.resolve(true);
};

export const getNextPosts = data => setPosts(data, GET_NEXT_SET_OF_POSTS);

export const setInitialPosts = data => setPosts(data, SET_INITIAL_POSTS);
