import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useStoreProductDispatch } from '../storeProduct/store';
import * as actions from '../storeProduct/actions';

export const Product = () => {

const [data, setData] = useState({
    element_name: "",
    price: "",
    deadline: "",
})

const dispatch = useStoreProductDispatch();

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
    //console.log(data)
}

const handleSubmit = async (e) => {
    e.preventDefault()
    const amount_ctr = String(Number(data.price)*500);
    console.log(amount_ctr);
    if (data.element_name !== "" && data.price !== "" && data.deadline !== ""){
        dispatch(actions.addProduct({
            provider_id: 2,
           // element_id:3,
            element_name: data.element_name,
            quantity:500,
            price: data.price,
            amount: amount_ctr,
            deadline: data.deadline,
        }));
        console.log(data)
    }
    
}

return (
    <div onBlur={handleSubmit}>
        <div className="container" >
            <form>
                <Row>
                    <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="element_name" id="element_name" onChange={handleInput} />
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        <input type="number" step={0.01} className="form-control" name="price" id="price" onChange={handleInput}/>
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="deadline" id="deadline" onChange={handleInput} />
                    </div>
                    </Col>
                </Row>
            </form>
        </div>
    </div>
  )
}