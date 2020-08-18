import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';
import App from 'components/App';

describe('Comments integration test', () => {
  let wrapper;
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{
        name: 'Fetched #1',
      }, {
        name: 'Fetched #2',
      }]
    });

    wrapper = mount(
      <Root>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
  })

  it('will return 500 lis when fetch button is clicked', (done) => {
    wrapper.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
      wrapper.update();
      expect(wrapper.find('li').length).toEqual(2);
      done();
    });
  });

});
