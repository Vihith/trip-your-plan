const planReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_PLANS':
            return [ ...action.payload ]
        default:
            return [...state]
    }
}

export default planReducer