import thunk from 'redux-thunk'
import RootReducer from './reducers'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react'

const initialState = {};
const middlewares = [thunk];
let store

const initStore = (preloadedState = initialState) => (createStore(
  RootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middlewares))
))

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
