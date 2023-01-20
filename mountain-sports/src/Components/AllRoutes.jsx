import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import ProductDetails from '../Pages/ProductDetails'
import ProductPage from '../Pages/ProductPage'
import RegisterPage from '../Pages/RegisterPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
    </Routes>
  )
}

export default AllRoutes
