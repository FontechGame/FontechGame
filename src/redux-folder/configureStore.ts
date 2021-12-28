import type { StringKeyObject } from '@other-support/Types'

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'

import thunk from 'redux-thunk'

import {
  persistStore,
  persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import localDataManagerState from '@redux-folder/reducers/localDataManagerState'
import tetrisManagerState from '@redux-folder/reducers/tetrisManagerState'

const rootReducer = combineReducers({
  tetrisManagerState,
  localDataManagerState,
})

const configureStore = (): StringKeyObject => {
  const persistConfig = {
    key: 'fontech-game-reducer',
    storage: storage,
    blacklist: [
      'tetrisManagerState',
      'localDataManagerState',
    ],
  }

  const presistedReducer = persistReducer(
    persistConfig,
    rootReducer
  )

  const store = createStore(
    presistedReducer,
    applyMiddleware(thunk)
  )
  let persistor = persistStore(store)
  return {
    persistor,
    store,
  }
}

export default configureStore

export type RootState = ReturnType<
  typeof rootReducer
>
