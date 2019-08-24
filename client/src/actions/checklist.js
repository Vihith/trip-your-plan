import axios from 'axios'

export const setChecklist=(id) =>{
    return{
        type:'SET_CHECKLIST',
        payload:id
    }
}

export const startsetChecklist=() =>{
    return (dispatch) =>{
      
        axios.get('http://localhost:3005/user/checklists', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(setChecklist(response.data))
                console.log(response.data)
            }) 
    }
}


export const addChecklist=(id) =>{
    return{
        type:"ADD_CHECKLIST",
        payload:id
    }
}

export const startaddChecklist =(formData) =>{
    return (dispatch) =>{
        axios.post('http://localhost:3005/user/checklists',formData,{
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
        axios.delete(`http://localhost:3005/user/checklists/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response =>{
           dispatch(removeChecklist(id))
        })
    } 
}