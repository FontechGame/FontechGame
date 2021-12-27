import type { StringKeyObject } from '@other-support/Types'

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'

import thunk from 'redux-thunk'

import localDataManagerState from '@redux-folder/reducers/localDataManagerState'

const rootReducer = combineReducers({
  localDataManagerState,
})

const configureStore = (): StringKeyObject => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  return {
    store,
  }
}

export default configureStore

export type RootState = ReturnType<
  typeof rootReducer
>
