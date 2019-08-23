import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import checklistReducer from '../reducers/checklist'

const configureStore=() =>{
    const store=createStore(combineReducers({
        user:userReducer,
        checklist:checklistReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore