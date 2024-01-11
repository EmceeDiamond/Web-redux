import * as actions from './actionTypes.js';

export const addProduct = data => ({
  type: actions.PRODUCT_ADD,
  payload: data
});


