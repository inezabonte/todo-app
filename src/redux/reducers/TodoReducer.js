import { FETCH_TASKS} from '../actions/TodoAction'
import { CREATE_TASK} from '../actions/TodoAction'
import { DELETE_TASK} from '../actions/TodoAction'
import { UPDATE_TASK} from '../actions/TodoAction'

const initialState = {
    tasks: [],
}

function todoReducer(state = initialState, action){
    switch(action.type){
        case FETCH_TASKS:
            return{
                tasks: [...action.payload],
            }
        case CREATE_TASK:
            const updatedTask = [...state.tasks, action.payload]
            localStorage.setItem("tasks", JSON.stringify(updatedTask))
            return{
                tasks: updatedTask
            }
        case DELETE_TASK:
            const updatedTasks = [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)]
            localStorage.setItem("tasks", JSON.stringify(updatedTasks))
            return{
                tasks:updatedTasks,
            }
        case UPDATE_TASK:
            const copy = state.tasks.slice()
            copy[action.index] = action.payload
            localStorage.setItem("tasks", JSON.stringify(copy))
            return{
                tasks: copy,
            }
        default: 
            return state
    }
}

export default todoReducer
