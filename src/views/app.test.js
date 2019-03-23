import React from 'react';
import { shallow } from 'enzyme';

import App from 'views/app';
import CommentBox from 'views/components/comment-box/comment-box';
import CommentList from 'views/components/comment-list/comment-list';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />) });

  it('renders the <CommentBox /> component and only once', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  it('renders the <CommentList /> component and only once', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
