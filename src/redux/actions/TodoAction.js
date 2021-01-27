import axios from 'axios'

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR'

const token = window.localStorage.getItem('loginToken')


export const fetchTasks = () => dispatch => {
    return axios.get('https://todo-app-ineza.herokuapp.com/api/v1/todo', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        dispatch({
            type: FETCH_TASKS_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_TASKS_ERROR,
            error: err.response ? err.response.data.error : err.message
        })
    })
}