import { combineReducers } from 'redux'
import LoginReducer from './loginReducer'
import SignupReducer from './signupReducer'
import TodoReducer from './TodoReducer'

const reducers = combineReducers({
    login: LoginReducer,
    signup: SignupReducer,
    todo: TodoReducer
})

export default reducers