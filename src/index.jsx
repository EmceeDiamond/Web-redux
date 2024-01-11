import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import AppProvider from './AppProvider.jsx'
import {storeProviderContext, store_Provider} from './storeProvider/store.js';
import { storeProductContext, store_Product } from './storeProduct/store.js';
//import { persistor_Provider} from './storeProvider/store.js'
//import { persistor_Product } from './storeProduct/store.js';
//import { PersistGate } from 'redux-persist/integration/react';
//import { AddStore } from './pages/AddStore.jsx';


//let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store_Provider } context={storeProviderContext}>
    <Provider store={store_Product} context={storeProductContext}>
      <AppProvider />
    </Provider>
  </Provider>,
);

