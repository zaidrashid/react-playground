import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('CommentBox component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Root><CommentBox /></Root>);
  });

  afterEach(() => {
    wrapper.unmount();
  })

  describe('renders a form', () => {
    it('contains a form element', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    });
    
    it('contains a textarea element', () => {
      expect(wrapper.find('textarea')).toHaveLength(1);
      expect(wrapper.find('textarea').prop('value')).toEqual('');
      expect(wrapper.find('textarea').prop('placeholder')).toEqual('Enter your comment here...');
    });

    it('contains 2 buttons', () => {
      expect(wrapper.find('button')).toHaveLength(2);
    });
  });

  describe('has a text area', () => {
    const valueToAssert = 'new comment';

    beforeEach(() => {
      // the real event name of the html
      wrapper.find('textarea').simulate('change', {
        target: {
          value: valueToAssert
        }
      });
  
      // force the component to update
      // ref: 36. Forcing component update (Advance React and Redux)
      wrapper.update();
    });

    it('where text can be type in', () => {
      // retrieving props value
      // ref 37. Retrieveing props value (Advance React and Redux)
      expect(wrapper.find('textarea').prop('value')).toEqual(valueToAssert);
    });
  
    it('where the text area are emptied when user submit the form', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
  });
});
