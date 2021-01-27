import axios from 'axios'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR'

export const LoginAction = (logindata) => dispatch => {
    dispatch({
        type: LOGIN_PENDING
    })

    return axios.post('https://todo-app-ineza.herokuapp.com/api/v1/user/login',logindata)
    .then((res) => {
        localStorage.setItem('loginToken', res.data.userToken)
        dispatch({
            type: LOGIN_SUCCESS
        })
    } )
    .catch(err => {
        dispatch({
            type: LOGIN_ERROR,
            error: err.response ? err.response.data.error : err.message
        })
    })
}

export const clearSnackBar = () => dispatch => {
    dispatch({
        type: CLEAR_SNACKBAR
    })
}