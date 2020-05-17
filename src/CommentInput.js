import React from 'react';
import './App.css';

function CommentInput()  {
     
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>Username:</span>
          <div className='comment-field-input'>
            <input 
            />
          </div>
        </div>
        
        <div className='comment-field'>
          <span className='comment-field-name'>Comment Content:</span>
          <div className='comment-field-input'>
            <textarea 
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button >
            Submit
          </button>
        </div>
      </div>
    )
  
}

export default CommentInput;