const friendReducer=(state=[],action) =>{
    switch(action.type){
        case 'SET_FRIEND':
            return [...action.payload]
        case 'ADD_FRIEND':
            return [...state,action.payload]
        case 'REMOVE_FRIEND':
            return state.filter(friend => friend._id!==action.payload)
        default :
             return [...state]
        
    }
}

export default friendReducer