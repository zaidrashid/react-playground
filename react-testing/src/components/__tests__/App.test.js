import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


describe('App component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  
  // it is a global function, no need to import
  // ref: 15. Test Structure (Advance React and Redux)
  it('shows a comment box', () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });
  
  it('shows a comment list', () => {
    expect(wrapper.find(CommentList)).toHaveLength(1);
  });
});
