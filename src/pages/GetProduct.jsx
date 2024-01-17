import AdminPage from "../components/Admin_Page";
import { useStoreProductSelector } from "../storeProduct/store";
import { useEffect, useState } from "react";

export default function GetProduct() {
    const data = useStoreProductSelector(state => state);
    
    const [dataProduct, setDataProduct] = useState([])
    
    //setData(data2)
    //console.log(data)
    //const data = AddStoreProduct();
    useEffect(()=>{
        //var data1 = data.slice()       
        setDataProduct(data)
    }, [data])

    useEffect(()=>{
        console.log(dataProduct)
        console.log(JSON.stringify(dataProduct));
    }, [dataProduct])

    

    const handleDelete = (element_id) => {
        return async () => {
            const res = await fetch(`http://localhost:8000/delete_product/${element_id}`, {
                method: 'DELETE'
            })
            const body = await res.json()
            console.log(body)
            //callAPI()
            window.location.reload();
        }
    }


    

    console.log(dataProduct)
    const [sortedField, setSortedField] = useState(null);
    const [sort, setSort] = useState(false)
    if (sortedField !== null) {
        if (sort === true)
            dataProduct.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return -1;
            }
            if (a[sortedField] > b[sortedField]) {
                return 1;
            }
            return 0;
            });
        else{
            dataProduct.sort((a, b) => {
                if (a[sortedField] > b[sortedField]) {
                    return -1;
                }
                if (a[sortedField] < b[sortedField]) {
                    return 1;
                }
                return 0;
                });
        }
    }
    return (
        <div>
            <AdminPage />
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ProviderId</th>
                            <th>
                                <button type="button" onClick={() => {setSortedField('element_id'); setSort(!sort)}}>
                                #
                                </button>
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th>
                                <button type="button" onClick={() => {setSortedField('price'); setSort(!sort)}}>
                                Price
                                </button>
                            </th>
                            <th scope="col">Amount</th>
                            <th scope="col">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProduct!=null && dataProduct.map((item, index)=> (
                            <tr key={index}>
                                <th scope="row">{item.provider_id}</th>
                                <td>{item.element_id}</td>
                                <td>{item.element_name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.amount}</td>
                                <td>{item.deadline}</td>
                                <td>
                                    <a href={`/update_product/${item.element_id}`} className="btn btn-warning me-3">Update</a>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete(item.element_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      )
    }