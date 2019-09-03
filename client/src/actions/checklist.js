import axios from 'axios'

export const setChecklist=(checklists) =>{
    return{
        type:'SET_CHECKLIST',
        payload:checklists
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


export const addChecklist=(checklist) =>{
    return{
        type:"ADD_CHECKLIST",
        payload:checklist
    }
}

export const startaddChecklist =(formData) =>{
    return (dispatch) =>{
        console.log(formData)
        axios.post('http://localhost:3005/user/checklists',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            console.log(response)
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