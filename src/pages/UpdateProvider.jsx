import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProvider() {
    const navigate = useNavigate()
    const {provider_id} = useParams()
    const [data, setData] = useState([])
    const [dataUpdate, setDataUpdate] = useState({
        provider_name: "",
        INN: "",
        contact_details: "",
        RF: ""
    })

    const callAPI = async () => {
        const res = await fetch(`http://localhost:8000/provider/${provider_id}`);
        const body = await res.json()
        setData(body)
        setDataUpdate(body)
        console.log(body)
    }

    useEffect(()=>{
        callAPI()
    }, [])

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDataUpdate({...dataUpdate, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { provider_name, INN, contact_details, RF} = dataUpdate
        const res = await fetch(`http://localhost:8000/provider/update_provider/${provider_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({provider_name, INN, contact_details, RF})
        })
        console.log(res.json())
        navigate("/admin/get_provider")
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="text-center">Update Employee {data.provider_name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="provider_name" className="form-lable">provider_name</label>
                        <input type="text" className="form-control" name="provider_name" id="provider_name"  onChange={handleInput} defaultValue={data.provider_name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="INN" className="form-lable">INN</label>
                        <input type="text" className="form-control" name="INN" id="INN" defaultValue={data.INN} onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact_details" className="form-lable">contact_details</label>
                        <input type="text" className="form-control" name="contact_details" id="contact_details" onChange={handleInput}  defaultValue={data.contact_details}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="RF" className="form-lable">RF</label>
                        <input type="text" className="form-control" name="RF" id="RF" onChange={handleInput} defaultValue={data.RF}/>
                    </div>
                    <button type="submit" className="btn btn-warning w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}