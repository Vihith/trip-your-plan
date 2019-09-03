export const registerationError = (errors) => {
    return {
        type: 'REGISTER_ERROR',
        payload: errors
    }
}

// export const loginError = (errors) => {
//     return {
//         type : 'LOGIN_ERROR',
//         payload : errors
//     }
// }