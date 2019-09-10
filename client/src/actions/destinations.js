import axios from '../config/axios'

export const addDestination = (destinations) => {
    return {
        type: 'START_ADD_DESTINATIONS',
        payload: destinations
    }
}

export const startAddDestination = (formData) => {
    return (dispatch) => {
        axios.post('/user/destinations', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    dispatch(addDestination(response.data))
                }
            })
    }
}

export const showDestination = (destinations) => {
    return {
        type: 'SHOW_DESTINATIONS',
        payload: destinations
    }
} 

export const startShowDestination = () => {
    return (dispatch) => {
        axios.get('/user/destinations', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(showDestination(response.data))
            })
    }
}
