import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleSaveComment, handleFetchComments } from 'store/actions';

const CommentBox = ({ handleSaveComment, handleFetchComments }) => {
  const [comment, setComment] = useState('');
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveComment(comment);
    setComment('');
  };
  return (
    <form onSubmit={ handleSubmit }>
      <h4>Your Comment</h4>
      <textarea
        value={ comment }
        onChange={ handleChange }
        placeholder="Add a Comment" 
      />
      <button
        type="submit"
        className="button primary radius bordered shadow"
        id="save-comments">
        Submit Comment
      </button>
      <button
        type="button"
        className="button primary radius bordered shadow"
        id="fetch-comments" 
        onClick={ handleFetchComments }>Fetch Comments</button>
    </form>
  );
};

CommentBox.defaultProps = {
  handleSaveComment: () => {},
  handleFetchComments: () => {},
};

export default connect(
  null, 
  { handleSaveComment, handleFetchComments },
)(CommentBox);