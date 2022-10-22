
const initialState={
    accinfo:{},
}

export const accinfoReducer=(state=initialState,action)=>{
    if(action.type==="accinfo"){
        return{
            ...state,
            accinfo:action.payload
        }
    }
if(action.type=="loginInfo"){
    return{
        ...state,
        loginInfo: action.payload
    }
}

    return state;
}