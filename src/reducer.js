import { Action } from "./actions";

const initialState= {
    comments:[],
}

function reducer(state=initialState,action){
    switch(action.type){
        case Action.finishLoading:
            return{
                ...state,
                comments:action.payload,
            };
        default:
            return state;
    }
}

export default reducer;