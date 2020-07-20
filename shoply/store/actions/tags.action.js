import { CHANGE_TAG } from '../types';

export const changeCurrentTag = tagId => (dispatch) => {
  dispatch({
    type: CHANGE_TAG,
    payload: {
      tagId
    }
  });

  return Promise.resolve(true);
};
