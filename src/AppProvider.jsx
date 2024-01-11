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
//import AddProducts from './pages/AddProducts'
//import UpdateEmployee from './pages/UpdateEmployee'
//import GetProduct  from  './pages/GetProducts'
//import AddProduct  from  './pages/AddProduct'
//import {AddStore} from  './pages/AddStore.js'


function AppProvider() {

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppProvider
