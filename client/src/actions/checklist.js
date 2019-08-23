export const addChecklist=(id) =>{
    return{
        type:"ADD_CHECKLIST",
        payload:id
    }
}

export const removeChecklist=(id) =>{
    return{
        type:"REMOVE_CHECKLIST",
        payload:id
    }
}