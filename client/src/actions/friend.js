import axios from 'axios';

export const setFriend=(friends) =>{
    console.log('uuuuuu',friends)
    return {
        type:'SET_FRIEND',
        payload:friends
    }
}

export const startsetFriend=() =>{
    return(dispatch) =>{
       
        axios.get('http://localhost:3005/user/friends',{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
           
            dispatch(setFriend(response.data))
        })
    }
}

export const addFriend=(friend) =>{
    return {
        type:'ADD_FRIEND',
        payload:friend
    }
}

export const startaddFriend=(formData) =>{
    return (dispatch) =>{
        axios.post('http://localhost:3005/user/friends',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            dispatch(addFriend(formData))
        })
    }
}

export const removeFriend=(id) =>{
    return {
        type:'REMOVE_FRIEND',
        payload:id

    }
}

export const startremoveFriend=(id) =>{
    return(dispatch) =>{
        axios.delete(`http://localhost:3005/user/friends/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            dispatch(removeFriend(id))
        })
    }
}