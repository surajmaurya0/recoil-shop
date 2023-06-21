import React from 'react'
import Home from './components/pages/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './components/products/AddProduct.jsx'
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/add-product' element={<AddProduct/>} />
    <Route path="*" element={<h1>Page Not Found</h1>} />
   </Routes>
   </>
  )
}

export default App