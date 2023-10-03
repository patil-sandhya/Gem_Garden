import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { ProductList } from '../Pages/ProductList'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Cart from './Cart'
import { SingleProduct } from '../Pages/SinglePage'
import { CreditCard } from './CreditCard'
import { Order } from './Order'
import PasswordRecovery from '../Pages/PasswordRecovery'
import { AdminList } from '../Pages/Admin/Admin'
import { EditProduct } from '../Pages/EditProduct'
import AdminLogin from "../Pages/AdminLogin"
import { AdminPage } from '../Pages/Admin/AdminPage'




function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cardPayment' element={<CreditCard/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/passwordrecovery' element={<PasswordRecovery />} />
        <Route path='/admin' element={<AdminList/>}/>
        <Route path='/products/edit/:id' element={<EditProduct/>}/>
        <Route path='/productList/:id' element={<SingleProduct/>}/>
        <Route path="/add-product" element={<AdminPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default AllRoutes