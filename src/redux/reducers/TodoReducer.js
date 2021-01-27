import { FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, CLEAR_SNACKBAR } from '../actions/TodoAction'
import { CREATE_TASK_ERROR, CREATE_TASK_SUCCESS, CREATE_TASK_PENDING } from '../actions/TodoAction'
import { DELETE_TASK_ERROR, DELETE_TASK_SUCCESS, DELETE_TASK_PENDING } from '../actions/TodoAction'
import { UPDATE_TASK_ERROR, UPDATE_TASK_SUCCESS, UPDATE_TASK_PENDING } from '../actions/TodoAction'

const initialState = {
    tasks: [],
    pending: true,
    error: null,
    load: false,
    snackBarMessage: {
        open: false,
        severity: '',
        message: null
    }
}

function todoReducer(state = initialState, action){
    switch(action.type){
        case FETCH_TASKS_SUCCESS:
            return{
                ...state,
                pending: false,
                tasks: action.payload,
            }
        case FETCH_TASKS_ERROR:
            return{
                ...state,
                pending: false,
                snackBarMessage: {
                    open: true,
                    severity: 'error',
                    message: action.error
                }
            }
        case CREATE_TASK_PENDING:
            return{
                ...state,
                load: true
            }
        case CREATE_TASK_SUCCESS:
            return{
                ...state,
                load: false,
                tasks:[...state.tasks, action.payload],
                snackBarMessage: {
                    open: true,
                    severity: 'success',
                    message: 'Task added'
                }
            }
        case CREATE_TASK_ERROR:
            return{
                ...state,
                load: false,
                snackBarMessage: {
                    open: true,
                    severity: 'error',
                    message: action.error
                }
            }
        case DELETE_TASK_PENDING:
            return{
                ...state,
                load: true
            }
        case DELETE_TASK_SUCCESS:
            return{
                ...state,
                load: false,
                tasks:[...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)],
                snackBarMessage: {
                    open: true,
                    severity: 'success',
                    message: "Task deleted successfully"
                }
            }
        case DELETE_TASK_ERROR:
            return{
                ...state,
                load: false,
                snackBarMessage: {
                    open: true,
                    severity: 'error',
                    message: action.error
                }
            }
        case UPDATE_TASK_PENDING:
            return{
                ...state,
                load: true
            }
        case UPDATE_TASK_SUCCESS:
            const copy = state.tasks.slice()
            copy[action.index] = action.payload
            return{
                ...state,
                load: false,
                tasks: copy,
                snackBarMessage: {
                    open: true,
                    severity: 'success',
                    message: 'Update successfull'
                }
            }
        case UPDATE_TASK_ERROR:
            return{
                ...state,
                load: false,
                snackBarMessage: {
                    open: true,
                    severity: 'error',
                    message: action.error
                }
            }
        case CLEAR_SNACKBAR:
            return{
                ...state,
                snackBarMessage: {
                    open: false,
                    severity: '',
                    message: null
                }
            }
        default: 
            return state
    }
}

export default todoReducer