import { HANDLE_SAVE_COMMENT } from 'store/actions/types';

export const handleSaveComment = (comment) => ({
  type: HANDLE_SAVE_COMMENT,
  payload: { comment },
});
