import { useState } from "react";
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { useStoreProductDispatch } from "../storeProduct/store";

export default function AddProduct() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        element_name: "",
        price: "",
        deadline: "",
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {element_name, price, deadline} = data
        const res = await fetch("http://localhost:8000/add_products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({element_name, price, deadline})
        })
        const body = await res.json()
        console.log(body)
        navigate("/")
    }


  return (
    <div>
        <Navbar />
        <div className="container">
            <h1 className="text-center">Add Products</h1>
            <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ElementId</th>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
            <label htmlFor="element_name">NamellL</label><label htmlFor="price">Price</label><label htmlFor="deadline">Deadline</label>
                <tbody>
                <Row>
                    <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="element_name" id="element_name"  onChange={handleInput} />
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        {/*<label htmlFor="price" className="form-lable">Price</label>*/}
                        <input type="number" step={0.01} className="form-control" name="price" id="price"  onChange={handleInput} />
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        {/*(<label htmlFor="deadline" className="form-lable">Deadline</label>*/}
                        <input type="text" className="form-control" name="deadline" id="deadline"  onChange={handleInput} />
                    </div>
                    </Col>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </Row>
                </tbody>
            </table>
            </form>
        </div>
    </div>
  )
}