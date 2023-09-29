import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { ProductList } from '../Pages/ProductList'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
