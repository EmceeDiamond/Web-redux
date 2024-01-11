//import { AddStore } from '../pages/AddStore.js';
//import AddStore from '../storeProvider/AddStore.js';
import * as actions from './actionTypes.js';
//let lastId = 0;



export default function reducer(state, action) {
  switch (action.type) {
    case actions.PRODUCT_ADD:
      return [...state, {
        //id: lastId++,
        provider_id: action.payload.provider_id,
        //element_id: action.payload.element_id,
        element_name: action.payload.element_name,
        quantity: action.payload.quantity,
        price: action.payload.price,
        amount: action.payload.amount,
        deadline: action.payload.deadline,
      }];
      default:
        console.log(state)
        return state;
    }
}