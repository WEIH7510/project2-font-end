import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {addComment} from './actions';

function CommentInput(props)  {
  const dispatch=useDispatch();
  const add=()=>{
    var message=document.getElementById(props.id).value;
    dispatch(addComment(props.id,message));
  }
     
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>Comment Content:</span>
          <div className='comment-field-input'>
            <textarea id={props.id}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={add}>
            Submit
          </button>
        </div>
      </div>
    )
  
}

export default CommentInput;