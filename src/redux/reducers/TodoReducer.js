import { FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from '../actions/TodoAction'

const initialState = {
    tasks: [],
    pending: true,
    error: null,
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
        default: 
            return state
    }
}

export default todoReducer