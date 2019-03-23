import commentsReducer from 'store/reducers/comments';
import { HANDLE_SAVE_COMMENT } from 'store/actions/types';

describe('commentsReducer', () => {
  it('handles action of type unknown', () => {
    const newState = commentsReducer([], { type: 'NON_EXISTING_TYPE' })
    expect(newState).toEqual([]);
  });
  it('handles action of type HANDLE_SAVE_COMMENT', () => {
    const action = {
      type: HANDLE_SAVE_COMMENT,
      payload: { comment: 'updated comment' },
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['updated comment']);
  });
});

