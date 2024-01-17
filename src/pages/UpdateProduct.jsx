import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProduct() {
    const navigate = useNavigate()
    const {element_id} = useParams()
    const [data, setData] = useState([])
    const [dataUpdate, setDataUpdate] = useState({
        element_name: "",
        quantity: "",
        price: "",
        amount: "",
        deadline: "",
    })

    const callAPI = async () => {
        const res = await fetch(`http://localhost:8000/product/${element_id}`);
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

        dataUpdate.amount = String(Number(dataUpdate.price) * 500)
        const { element_name, quantity, price, amount, deadline} = dataUpdate
        
        console.log(amount)
        const res = await fetch(`http://localhost:8000/product/update_product/${element_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({element_name, quantity, price, amount, deadline})
        })
        console.log(res.json())
        navigate("/admin/get_product")
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="text-center">Update Employee {data.element_name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="element_name" className="form-lable">element_name</label>
                        <input type="text" className="form-control" name="element_name" id="element_name"  onChange={handleInput} defaultValue={data.element_name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-lable">Price</label>
                        <input type="text" className="form-control" name="price" id="price" defaultValue={data.price} onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deadline" className="form-lable">Deadline</label>
                        <input type="text" className="form-control" name="deadline" id="deadline" onChange={handleInput}  defaultValue={data.deadline}/>
                    </div>

                    <button type="submit" className="btn btn-warning w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}