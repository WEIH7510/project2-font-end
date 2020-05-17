
import './App.css';
import React,{useEffect} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import {useDispatch} from 'react-redux';
import { loadComments } from './actions';




function App(){
    const tsIcon1 = require('./images/ipadpro.png');
    const tsIcon2 = require('./images/mk.png');
    const tsIcon3 = require('./images/ap.png');

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
                        <CommentInput />
                        
                    </div>
                    <div className='list'> 
                        <CommentList />
                    </div>
                    
                </div>
                <div className = "images2">
                    <img src={tsIcon2} alt="" />
                    <div className='wrapper'>
                        <CommentInput />
                        
                    </div>
                    <div className='list'> 
                        <CommentList />
                    </div>
                </div>
                <div className = "images3">
                    <img src={tsIcon3} alt="" />                    
                    <div className='wrapper'>
                        <CommentInput />
                    </div>
                    <div className='list'> 
                        <CommentList />
                    </div>

                </div>
            </div>
        </div>
        
    );
}


 

export default App;
