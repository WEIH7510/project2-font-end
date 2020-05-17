
import './App.css';
import React,{useEffect} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import {useDispatch} from 'react-redux';
import { loadComments } from './actions';
import {useSelector} from 'react-redux';



function App(){
    const tsIcon1 = require('./images/ipadpro.png');
    const tsIcon2 = require('./images/mk.png');
    const tsIcon3 = require('./images/ap.png');
    const comments1=useSelector(state=>state.comments1);
    const comments2=useSelector(state=>state.comments2);
    const comments3=useSelector(state=>state.comments3);
    const dispacth=useDispatch();
    
    useEffect(()=>{
        dispacth(loadComments());
    },[dispacth]);

    return (
        <div id = "whole">
        <h1>Review new apple devices</h1>
            <div id = "images">

                <div className = "images1">
                    <img src={tsIcon1} alt="" />
                    <div className='wrapper'>
                        <CommentInput id={1}/>
                        
                    </div>
                    <div className='list'> 
                        <CommentList comments={comments1}/>
                    </div>
                    
                </div>
                <div className = "images2">
                    <img src={tsIcon2} alt="" />
                    <div className='wrapper'>
                        <CommentInput id={2}/>
                        
                    </div>
                    <div className='list'> 
                        <CommentList comments={comments2} />
                    </div>
                </div>
                <div className = "images3">
                    <img src={tsIcon3} alt="" />                    
                    <div className='wrapper'>
                        <CommentInput id={3}/>
                    </div>
                    <div className='list'> 
                        <CommentList comments={comments3} />
                    </div>

                </div>
            </div>
        </div>
        
    );
}


 

export default App;
