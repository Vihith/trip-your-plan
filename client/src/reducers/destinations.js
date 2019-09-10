const destinationReducer=(state=[],action) =>{
    switch(action.type){
        case 'START_ADD_DESTINATIONS':
                return [action.payload]
        case 'SHOW_DESTINATIONS':
                return [...action.payload]
        default:
                return [...state]
    }
}
export default destinationReducer