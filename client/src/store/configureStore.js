import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import checklistReducer from '../reducers/checklist'
import formErrorReducer from '../reducers/formError';
import friendReducer from '../reducers/friend'
import planReducer from '../reducers/plans'
import destinationReducer from '../reducers/destinations';
// import errorFixReducer from '../reducers/errorsFix'

const configureStore=() =>{
    const store=createStore(combineReducers({
        user:userReducer,
        errors: formErrorReducer,
        checklists:checklistReducer,
        friends:friendReducer,
        // fix : errorFixReducer,
        checklists:checklistReducer,
        plans: planReducer,
        destinations:destinationReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore