import React from 'react';
import Comment from './Comment';
import './App.css';

function  CommentList (props) {        

  return (
    <div>
      {props.comments.map((comment, i=0) => <Comment comment={comment} key={i++} number={i}/>)}
    </div>
  )
  
}

export default CommentList