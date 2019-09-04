const planReducer = (state = [], action) => {
    switch (action.type) {
        case 'START_PLAN':
            return [ action.payload ]
        case 'SHOW_PLAN':
            return [ ...action.payload ]
        case 'LIST_PLANS':
            return [ ...action.payload ]
        case 'PLAN_DETAILS':
            return [ ...state ]
        default:
            return [...state]
    }
}

export default planReducer