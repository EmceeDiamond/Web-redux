import { createStore } from 'redux';
import reducerProduct from './reducer.js'
import React from 'react';
import { createDispatchHook } from 'react-redux';
import { createSelectorHook } from 'react-redux';
import AddStoreProduct from './AddStore';
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

//export const initialState = [
   //{provider_id: 0, provider_name: 'mks', INN: 213124, contact_details: 'ff' , RF: 'r'},
   //{provider_id: 1, provider_name: 'vs', INN: 34, contact_details: 'ww', RF: 'df'},
   //{provider_id: 2, provider_name: 'rsn', INN: 43, contact_details: 'ee', RF: 'blue'}
//]
//const persistConfig = {
 // key: 'root',
 // storage,
//}

export const initialStateProduct = AddStoreProduct()
//const persistedReducer = persistReducer(persistConfig, reducer)
/*const store = createStore(
  reducer,
  initialState
);*/

console.log(initialStateProduct)
const storeProductContext = React.createContext();
export const useStoreProductDispatch = createDispatchHook(storeProductContext);
export const useStoreProductSelector = createSelectorHook(storeProductContext);
const store_Product = createStore(reducerProduct, initialStateProduct);
//const persistor_Product = persistStore(store_Product)
export {store_Product, storeProductContext}