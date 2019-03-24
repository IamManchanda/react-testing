import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'views/components/comment-list/comment-list';
import Root from 'root';

describe('<CommentList />', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      comments: ['Comment 1', 'Comment 2'],
    };
    wrapper = mount(<Root initialState={ initialState }><CommentList /></Root>);
  });

  it('creates one list item <li /> per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('renders the text for each list item <li /> comment', () => {
    expect(wrapper.render().text()).toContain('Comment 1');
    expect(wrapper.render().text()).toContain('Comment 2');
  });
});
