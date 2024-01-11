//import { useState} from "react";
//import { useDispatch } from 'react-redux';
//import * as actions from '../storeProvider/actions.js';
export default function AddStoreProduct(){
    //const name1 = 'provider_name';
    /*const name2 = "INN";
    const name3 = "contact_details";
    const name4 = "RF";*/ 
     
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
    //const [data1, setData] = useState({})
  
    /*const [data1, setData1] = useState({
      provider_name: "",
      INN: "",
      contact_details: "",
      RF: ""
  })*/
    const initialState_two = [
    //{provider_id: 0, provider_name: 'mks', INN: 213124, contact_details: 'ff' , RF: 'r'},
      /*{provider_id: 1, provider_name: 'vs', INN: 34, contact_details: 'ww', RF: 'df'},
     {provider_id: 2, provider_name: 'rsn', INN: 43, contact_details: 'ee', RF: 'blue'}*/
      ]
    getJSON('http://localhost:8000/products', function(data){
        initialState_two.push(...data)
    })
    
    return initialState_two
  }