import axios from 'axios'

export const myPlans = (plans) => {
    return {
        type: 'LIST_PLANS',
        payload: plans
    }
}

export const startMyPlans = () => {
    return (dispatch) => {
        axios.get('http://localhost:3005/user/plans',{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            console.log("actions plans", response.data)
            dispatch(myPlans(response.data))
        })
    }
}