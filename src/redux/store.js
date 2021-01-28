import thunk from 'redux-thunk'
import RootReducer from './reducers'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {};
const middlewares = [thunk];


const Store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default Store