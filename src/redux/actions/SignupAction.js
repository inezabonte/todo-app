import axios from 'axios'

export const SIGNUP_LOADING = 'SIGNUP_LOADING'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR'

export const signupAction = (payload) => dispatch => {
    const {fullname, password, email} = payload
    dispatch({
        type: SIGNUP_LOADING
    })
    return axios.post('https://todo-app-ineza.herokuapp.com/api/v1/user/signup', {
        name: fullname,
        email,
        password
    })
    .then(() => {
        dispatch({
            type: SIGNUP_SUCCESS,
        })
    })
    .catch((err) => {
        dispatch({
            type: SIGNUP_ERROR,
            error: err.response ? err.response.data.error : err.message
        })
    })
}

export const clearSnackBar = () => dispatch => {
    dispatch({
        type: CLEAR_SNACKBAR
    })
}