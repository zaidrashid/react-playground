import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('CommentBox component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders a form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('textarea').prop('value')).toEqual('');
    expect(wrapper.find('textarea').prop('placeholder')).toEqual('Enter your comment here...');
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('can type on the textarea', () => {
    const valueToAssert = 'new comment';
    // the real event name of the html
    wrapper.find('textarea').simulate('change', {
      target: {
        value: valueToAssert
      }
    });

    // force the component to update
    // ref: 36. Forcing component update (Advance React and Redux)
    wrapper.update();

    // retrieving props value
    // ref 37. Retrieveing props value (Advance React and Redux)
    expect(wrapper.find('textarea').prop('value')).toEqual(valueToAssert);
  });

  it('can submit new comment', () => {
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    });
    wrapper.update();

    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });

});
