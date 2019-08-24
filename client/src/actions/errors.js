export const registerationError = (errors) => {
    return {
        type: 'REGISTER_ERROR',
        payload: errors
    }
}