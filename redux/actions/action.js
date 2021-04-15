import * as t from './types'

export const fetchTasks = (payload) => (dispatch) => (
    dispatch({
        type: t.FETCH_TASKS,
        payload
    })
)

export const createTask = (payload) => (dispatch) => (
    dispatch({
        type: t.CREATE_TASK,
        payload
    })
)

export const deleteTask = (index) => (dispatch) => (
    dispatch({
        type: t.DELETE_TASK,
        index
    })
)

export const updateTask = (payload, index) => (dispatch) => (
    dispatch({
        type: t.UPDATE_TASK,
        payload,
        index
    })
)
