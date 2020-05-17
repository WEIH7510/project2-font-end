import React from 'react';
import './App.css';

function Comment(props)  {
  
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{props.comment.c_id} </span>：
          <p>{props.comment.message}</p>
        </div>
        
      </div>
    )
  
}

export default Comment