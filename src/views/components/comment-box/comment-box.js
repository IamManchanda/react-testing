import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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

export default CommentBox;