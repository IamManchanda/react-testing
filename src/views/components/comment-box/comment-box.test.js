import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'views/components/comment-box/comment-box';
import Root from 'root';

describe('<CommentBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Root><CommentBox /></Root>);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  describe('inner elements and components rendering', () => {
    it('renders <textarea /> element and only once', () => {
      expect(wrapper.find('textarea').length).toEqual(1);
    });
    it('renders <button /> element and only once', () => {
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('inner elements and components functionality', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', { 
        target: { value: 'updated comment' },
      });
      wrapper.update();
    });
    
    it('has a <textarea /> element that users can type in', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('updated comment');
    });
    it('has a <textarea /> element which gets emptied when form gets submitted', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
  });
});
