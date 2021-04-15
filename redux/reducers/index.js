import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'

const reducers = combineReducers({
    todo: TodoReducer
})

export default reducers
