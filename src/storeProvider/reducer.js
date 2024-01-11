//import { AddStore } from '../pages/AddStore.js';
import * as actions from './actionTypes.js';
//import { AddStore } from '../pages/AddStore.js';

export default function reducer(state, action) {
  switch (action.type) {
    case actions.PROVIDER_ADD:
      return [state, {
        //id: lastId++,
        provider_name: action.payload.provider_name,
        INN: action.payload.INN,
        contact_details: action.payload.contact_details,
        RF: action.payload.RF,
      }];
      default:
        console.log(state)
        return state;
    }
}