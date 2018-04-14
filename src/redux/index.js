import createSagaMiddleware from 'redux-saga'
// import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import { createWhitelistFilter } from 'redux-persist-transform-filter'
import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

import rootReducer from './modules'
// import rootSaga from './effects'
import { navigationMiddleware } from '../views'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
  blacklist: [],
  transforms: [],
}

const sagaMiddleWare = createSagaMiddleware()

const middleware = [
  // process.env.NODE_ENV === 'development' && createLogger(),
  navigationMiddleware,
  sagaMiddleWare,
].filter(x => !!x)

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistReducers,
  compose(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)
// // persistor.purge()
// sagaMiddleWare.run(rootSaga)
