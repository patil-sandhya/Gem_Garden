import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { ProductList } from '../Pages/ProductList'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Cart from './Cart'
import { SingleProduct } from '../Pages/SinglePage'



function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes