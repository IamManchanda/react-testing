import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => 
  <ul>
    { comments.map(
        (comment) => <li key={ comment }>{ comment }</li>,
      ).reverse() }
  </ul>;

CommentList.defaultProps = {
  comments: [],
};

export default connect(
  ({ comments }) => ({ comments }),
  {},
)(CommentList);
