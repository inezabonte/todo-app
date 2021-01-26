import { LOGIN_PENDING, LOGIN_ERROR, LOGIN_SUCCESS, CLEAR_SNACBAR } from '../actions/LoginAction'

const initialState = {
    pending: false,
    error: null,
    success: false,
    snackBarMessage: false
}

function LoginReducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_PENDING:
            return{
                ...state,
                pending: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                pending: false,
                success: true
            }
        case LOGIN_ERROR:
            return{
                ...state,
                pending: false,
                error: action.error,
                snackBarMessage: true
            }
        case CLEAR_SNACBAR:
            return{
                ...state,
                snackBarMessage: false
            }
        default:
            return state
    }
}

export default LoginReducer