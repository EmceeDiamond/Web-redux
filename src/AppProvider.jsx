import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import AddEmployee from './pages/AddEmployee'
import GetProduct from './pages/GetProduct'
//import AddProduct from './pages/AddProduct'
import AddProducts from './pages/AddProducts'
import Header from './pages/First_Pages'
import Admin from './pages/Admin'
import UpdateProvider from './pages/UpdateProvider'
import UpdateProduct from './pages/UpdateProduct'
//import AddProducts from './pages/AddProducts'
//import UpdateEmployee from './pages/UpdateEmployee'
//import GetProduct  from  './pages/GetProducts'
//import AddProduct  from  './pages/AddProduct'
//import {AddStore} from  './pages/AddStore.js'


function AppProvider() {
  //const dataProvider = useStoreProviderSelector(state => state)
  //const dataProduct = useStoreProductSelector(state => state)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/get_provider' element={<Home/>} />
          <Route path='/add_provider' element={<AddEmployee />} />
          <Route path='/admin/get_product' element={<GetProduct/>} />
          <Route path='/add_product' element={<AddProducts />} />
          <Route path='/update_provider/:provider_id' element={ <UpdateProvider /> } />
          <Route path='/update_product/:element_id' element={ <UpdateProduct /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppProvider
