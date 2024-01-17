import { useState, useEffect } from "react";
import AdminPage from "../components/Admin_Page"
import AddStore from "../storeProvider/AddStore"
import * as actions from '../storeProvider/actions';
import { useStoreProviderDispatch} from "../storeProvider/store";

export default function  Admin() {
    //const [dataProvider, setDataProvider] = useState([])
    const dispatch = useStoreProviderDispatch
    const data = AddStore();

    /*useEffect(()=>{     
        setDataProvider(data)
    }, [data])*/
    data.map((item) => 
        dispatch(actions.addProvider({
        provider_name: item.provider_name,
        INN: item.INN,
        contact_details: item.contact_details, 
        RF: item.RF
    }))
    )
    /*useEffect(()=>{       
        console.log(dataProvider)
    }, [dataProvider])*/
    
    
    return(
        <AdminPage />
    )
}