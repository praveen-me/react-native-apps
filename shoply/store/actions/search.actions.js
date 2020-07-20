import { SET_SEARCH_DATA } from '../types';

export const setSearchData = data => (dispatch) => {
  dispatch({
    type: SET_SEARCH_DATA,
    payload: {
      ...data
    }
  });

  return Promise.resolve(true);
};
