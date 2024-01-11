import { createStore } from 'redux';
import  AddStore  from './AddStore';
import reducer from './reducer.js'
import React from 'react';
import { createDispatchHook } from 'react-redux';
import { createSelectorHook } from 'react-redux';
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

/*export const initialState = [
   {provider_id: 0, provider_name: 'mks', INN: 213124, contact_details: 'ff' , RF: 'r'},
   {provider_id: 1, provider_name: 'vs', INN: 34, contact_details: 'ww', RF: 'df'},
   {provider_id: 2, provider_name: 'rsn', INN: 43, contact_details: 'ee', RF: 'blue'}
]*/
//const persistConfig = {
 // key: 'root',
//  storage,
//}
export const initialState = AddStore()
//const persistedReducer = persistReducer(persistConfig, reducer)
/*const store = createStore(
  reducer,
  initialState
);*/

console.log(initialState)
const storeProviderContext = React.createContext();
export const useStoreProviderDispatch = createDispatchHook(storeProviderContext);
export const useStoreProviderSelector = createSelectorHook(storeProviderContext);
const store_Provider = createStore(reducer, initialState);
//const persistor_Provider = persistStore(store_Provider) 
export {store_Provider, storeProviderContext}
