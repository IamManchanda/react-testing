import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'views/app.js';

describe('Integration Tests: Comments', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { body: 'Fetched #1' },
        { body: 'Fetched #2' },
      ],
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch list of comments and display them', (done) => {
    const wrapper = mount(<Root><App /></Root>);
    wrapper.find('#fetch-comments').simulate('click');
    moxios.wait(() => {
      wrapper.update();
      expect(wrapper.find('li').length).toEqual(2);
      done();
      wrapper.unmount();
    });
  });
});
