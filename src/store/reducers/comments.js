import { 
  HANDLE_SAVE_COMMENT,
  HANDLE_FETCH_COMMENTS, 
} from 'store/actions/types';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_SAVE_COMMENT:
      return [...state, action.payload.comment];
    case HANDLE_FETCH_COMMENTS:
      const comments = action.payload.response.data.map(comment => comment.body);
      return [...state, ...comments];
    default:
      return state;
  }
};

export default commentsReducer;
