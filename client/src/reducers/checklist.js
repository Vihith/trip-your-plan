const checklistReducer=(state=[],action) =>{
    switch(action.type){
        case 'ADD_CHECKLIST':
            return [...state,action.payload]
        case 'REMOVE_CHECKLIST':
            return state.filter(checklist => checklist._id!==action.payload)
        default:
            return [...state]
    }
}
export default checklistReducer