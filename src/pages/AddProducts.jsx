import { Product } from "./Product"
import { HeadlinesProduct } from "./Headlines_Product"
import { useStoreProductSelector } from "../storeProduct/store"
import {useNavigate} from 'react-router-dom';
import { initialStateProduct } from "../storeProduct/store";


export default function AddProducts() {
    const navigate = useNavigate()
    const data = useStoreProductSelector(state => state);
    //const [dataID, setDataID] = useState(0)

    var difference = data.filter(x => initialStateProduct.indexOf(x) === -1);
    console.log(difference)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8000/add_products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(difference)
        })
        const body = await res.json([])
        console.log(body)
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