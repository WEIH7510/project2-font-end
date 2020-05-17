import React from 'react';
import Comment from './Comment';
import './App.css';
import {useSelector} from 'react-redux';

function  CommentList () {
  const comments=useSelector(state=>state.comments);          


  return (
    <div>
      {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
    </div>
  )
  
}

export default CommentList