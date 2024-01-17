//import { useState} from "react";
//import { useDispatch } from 'react-redux';
//import * as actions from '../storeProvider/actions.js';
export default function AddStoreProduct(){
     
     var getJSON = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
          callback(xhr.response, xhr.response);
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
      };

    const initialState_two = []
    getJSON('http://localhost:8000/products', function(data){
        initialState_two.push(...data)
    })
    
    return initialState_two
  }