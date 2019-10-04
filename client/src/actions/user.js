import axios from '../config/axios'

export const registerUser = (user) => {
    return {
        type: 'REGISTER_USER',
        payload: user
    }
}

// export const startRegisterUser = (formData) => {

//     return (dispatch) => {
//         axios.post('/register', formData)
//             .then(response => {
//                 if (response.data.errors) {
//                     dispatch(registerationError(response.data.errors))
//                 } else {
//                     dispatch(registerUser(response.data))
//                 }
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startSetUser = (user) => {
    return (dispatch) => {
        axios.get('/user/profile', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(setUser(response.data))
            })
    }
}

export const loginUser = (user) => {
    return {
        type: 'LOGIN_USER',
        payload: user
    }
}

// export const startLoginUser = (formData) => {
//     return (dispatch) => {
//         axios.post('/login', formData)
//             .then(response => {
//                 // if (response.data.hasOwnProperty('errors')) {
//                 //     this.setState({
//                 //         errorMsg: response.data.errors
//                 //     })
//                 // } else {
//                 localStorage.setItem('userAuth', response.data.token)  // ???? 
//                 dispatch(loginUser(response.data.userInfoForRedux))
//                 // }
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }



export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        payload: id
    }
}


export const editUser = (user) => {
    return {
        type: 'EDIT_USER',
        payload: user
    }
}

export const startEditUser = (formData) => {
    return (dispatch) => {
        axios.put('/user/profile/edit', formData, {
            headers: { 'x-auth': localStorage.getItem('userAuth') }
        })
            .then(response => {
                // const body = response.data
                dispatch(editUser(response.user))
            })
    }
}