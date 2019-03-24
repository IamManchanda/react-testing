import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleSaveComment } from 'store/actions';

const CommentBox = ({ handleSaveComment }) => {
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
        className="button primary radius bordered shadow">
        Submit Comment
      </button>
    </form>
  );
};

CommentBox.defaultProps = {
  handleSaveComment: () => {},
};

export default connect(null, { handleSaveComment })(CommentBox);