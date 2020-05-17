import { Action } from "./actions";

const initialState= {
    comments1:[],
    comments2:[],
    comments3:[],
}

function reducer(state=initialState,action){
    switch(action.type){
        case Action.finishLoading:
            return{
                ...state,
                comments1:action.payload.filter(comment=>comment.p_id===1),
                comments2:action.payload.filter(comment=>comment.p_id===2),
                comments3:action.payload.filter(comment=>comment.p_id===3),
            };
            case Action.showComment:
                if(action.payload.p_id===1){
                    return{
                        ...state,
                        comments1:[...state.comments1,action.payload],
                    };
                }
                else if(action.payload.p_id===2){
                    return{
                        ...state,
                        comments2:[...state.comments2,action.payload],
                    };
                }
                else{
                    return{
                        ...state,
                        comments3:[...state.comments3,action.payload],
                    };
                }
        default:
            return state;
    }
}

export default reducer;