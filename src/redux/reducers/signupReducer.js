import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, CLEAR_SNACKBAR } from '../actions/SignupAction'

const initialState = {
    pending: false,
    error: null,
    success: false,
    snackBarMessage: false
}

function signupReducer(state = initialState, action) {
    switch(action.type){
        case SIGNUP_LOADING:
            return{
                ...state,
                pending: true,
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                pending: false,
                success: true
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                pending: false,
                error: action.error,
                snackBarMessage: true
            }
        case CLEAR_SNACKBAR:
            return{
                ...state,
                snackBarMessage: false
            }
        default:
            return state
    }
}

export default signupReducer