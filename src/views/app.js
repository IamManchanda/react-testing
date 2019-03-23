import React, { Fragment } from 'react';
import CommentBox from 'views/components/comment-box/comment-box';
import CommentList from 'views/components/comment-list/comment-list';

const App = () => {
  return (
    <Fragment>
      <div className="grid-container fluid">
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell medium-3">
            <CommentBox />
            <CommentList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
