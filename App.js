import React from 'react';
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./src/redux";
import RootView from './src/views'

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         <SafeAreaView style={{ flex: 1, backgroundColor: 'orange'}}>
            <RootView />
          </SafeAreaView>
        </PersistGate>
    </Provider>
)

export default App;