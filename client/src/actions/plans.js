import axios from '../config/axios'


export const plan = (plans) => {
    return {
        type: 'START_PLAN',
        payload: plans
    }
}

export const startPlan = (formData) => {
    return (dispatch) => {
        axios.post('/user/plans', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    dispatch(plan(response.data))
                }
            })
    }
}


export const showPlan = (plans) => {
    return {
        type: 'SHOW_PLAN',
        payload: plans 
    }
} 

export const startShowPlan = () => {
    return (dispatch) => {
        axios.get('/user/plans', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(showPlan(response.data))
            })
    }
}


export const myPlans = (plans) => {
    return {
        type: 'LIST_PLANS',
        payload: plans
    }
}

export const startMyPlans = () => {
    return (dispatch) => {
        axios.get('/user/plans',{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            dispatch(myPlans(response.data))
        })
    }
}


export const planDetails = (id) => {
    return {
        type: 'PLAN_DETAILS',
        payload: id
    }
}

export const startPlanDetails = (id) => {
    return (dispatch) => {
        axios.get(`/user/plans/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response =>{ 
                 dispatch(planDetails(response.data))
             })
            }
}


