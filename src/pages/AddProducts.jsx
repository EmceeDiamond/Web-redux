import { Product } from "./Product"
import { HeadlinesProduct } from "./Headlines_Product"
import { useStoreProductSelector } from "../storeProduct/store"
import {useNavigate} from 'react-router-dom';

export default function AddProducts() {
    const navigate = useNavigate()
    const data = useStoreProductSelector(state => state);
    console.log(data)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        const res = await fetch("http://localhost:8000/add_products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const body = await res.json([])
        console.log(body)
        console.log(data)
        navigate("/get")
    }
    /*render() {
        const list = [];
        for (let idx = 0; idx < 95; idx++ ){
            list.push(<div>{<Product/>}</div>);
        }
        return <div>${list}</div>;
    }*/
    
        /*(() => {
  
            for (let i = 0; i <= 95; i++) {
                <Product />       
            }
          })()*/
    return(
    <div>
        <div className="container">
            <h1 className="text-center">Add Products</h1> 
            <form onSubmit={handleSubmit}>
                <HeadlinesProduct />
                {Array.apply(0, Array(2)).map(function (x, i) {
                return <Product key={i} />;
            })}
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    </div>
    )

}