import React from 'react';
import CommentBox from './CommentBox';
import CommenList from 'components/CommentList';

export default () => {
  return (
    <React.Fragment>
      <CommentBox />
      <CommenList />
    </React.Fragment>
  );
}