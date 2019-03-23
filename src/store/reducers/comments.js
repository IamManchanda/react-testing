import { HANDLE_SAVE_COMMENT } from 'store/actions/types';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_SAVE_COMMENT:
      return [...state, action.payload.comment];
    default:
      return state;
  }
};

export default commentsReducer;
