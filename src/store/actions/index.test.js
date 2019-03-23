import { handleSaveComment } from 'store/actions';
import { HANDLE_SAVE_COMMENT } from 'store/actions/types';

describe('handleSaveComment', () => {;
  it('has the correct type', () => {
    const action = handleSaveComment();
    expect(action.type).toEqual(HANDLE_SAVE_COMMENT);
  });
  it('has the correct payload comment', () => {
    const action = handleSaveComment('updated comment');
    expect(action.payload.comment).toEqual('updated comment');
  });
});
