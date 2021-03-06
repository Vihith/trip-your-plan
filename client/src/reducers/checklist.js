const checklistReducer=(state=[],action) =>{
    switch(action.type){
        case 'ADD_CHECKLIST':
            return [...state,action.payload]
        case 'REMOVE_CHECKLIST':
            return state.filter(checklist => checklist._id!==action.payload)
        case 'SET_CHECKLIST':
            return [...action.payload]
        default:
            return [...state]
    }
}
export default checklistReducer