import axios from '../config/axios'

export const setChecklist=(checklists) =>{
    return{
        type:'SET_CHECKLIST',
        payload:checklists
    }
}

export const startsetChecklist=() =>{
    return (dispatch) =>{
      
        axios.get('/user/checklists', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(setChecklist(response.data))
            }) 
    }
}


export const addChecklist=(checklist) =>{
    return{
        type:"ADD_CHECKLIST",
        payload:checklist
    }
}

export const startaddChecklist =(formData) =>{
    return (dispatch) =>{
        axios.post('/user/checklists',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            dispatch(addChecklist(formData))
         })
       
    }
}



export const removeChecklist=(id) =>{
    return{
        type:"REMOVE_CHECKLIST",
        payload:id
    }
}

export const startremoveChecklist=(id) =>{
    return (dispatch) =>{
        axios.delete(`/user/checklists/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response =>{
           dispatch(removeChecklist(id))
        })
    } 
}