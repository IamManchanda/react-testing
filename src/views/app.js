import React, { Fragment } from 'react';
import CommentBox from 'views/components/comment-box/comment-box';
import CommentList from 'views/components/comment-list/comment-list';

const App = () => {
  return (
    <Fragment>
      <CommentBox />
      <CommentList />
    </Fragment>
  );
};

export default App;
