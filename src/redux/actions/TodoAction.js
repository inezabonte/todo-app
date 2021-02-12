export const FETCH_TASKS = 'FETCH_TASKS'
export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export const fetchTasks = () => dispatch => {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    return dispatch({
        type: FETCH_TASKS,
        payload: tasks
    })
}

export const createTask = (payload) => dispatch => {
    console.log(payload)
    return dispatch({
        type: CREATE_TASK,
        payload
    })
}

export const deleteTask = (index) => dispatch => {
    return dispatch({
        type: DELETE_TASK,
        index
    })
}

export const updateTask = (payload, index) => dispatch => {
    return dispatch({
        type: UPDATE_TASK,
        index,
        payload
    })
}

