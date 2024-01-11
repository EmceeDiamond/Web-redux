import { useState } from "react";
import {useNavigate} from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import * as actions from '../storeProvider/actions';
import { useStoreProviderDispatch, useStoreProviderSelector } from "../storeProvider/store";

export default function AddEmployee() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        provider_name: "",
        INN: "",
        contact_details: "",
        RF: ""
    })

    const dt = useStoreProviderSelector(state => state);
    console.log(dt)


    const dispatch = useStoreProviderDispatch();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value});
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {provider_name, INN, contact_details, RF} = data
        const res = await fetch("http://localhost:8000/add_providers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({provider_name, INN, contact_details, RF})
        })
        const body = await res.json()
        console.log(data)
        navigate("/add_product")
        dispatch(actions.addProvider({
            provider_name: data.provider_name,
            INN: data.INN,
            contact_details: data.contact_details, 
            RF: data.RF
          }));
        //setData('');
    }

  return (
    <div>
        <div className="container">
            <h1 className="text-center">Add Provider</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="provider_name" className="form-lable">Name</label>
                    <input type="text" className="form-control" name="provider_name" id="provider_name" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="INN" className="form-lable">INN</label>
                    <input type="INN" className="form-control" name="INN" id="INN" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact_details" className="form-lable">contact_details</label>
                    <input type="text" className="form-control" name="contact_details" id="contact_details" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="RF" className="form-lable">RF</label>
                    <input type="text" className="form-control" name="RF" id="RF" onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    </div>
  )
}