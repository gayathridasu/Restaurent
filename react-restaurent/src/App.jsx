import { useState } from 'react'
import Navbar from './restaurent/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './restaurent/menu'
import Review from './restaurent/review'
import Address from './restaurent/address'
import Photos from './restaurent/photos'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/reviews" element={<Review/>}></Route>
      <Route path="/address" element={<Address/>}></Route>
      <Route path="/photos" element={<Photos/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
