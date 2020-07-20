import { CHANGE_CATEGORY } from '../types';

export const changeCurrentCategory = categoryId => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: {
      categoryId
    }
  });

  return Promise.resolve(true);
};
