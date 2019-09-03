const formErrorReducer = (state = {}, action) => {
    switch(action.type) {
        case 'REGISTER_ERROR' : 
            return {...state, ...action.payload }
        // case 'LOGIN_ERROR' :
        //     return {...state, ...action.payload}
        default: 
            return {...state}
    }
}   

export default formErrorReducer