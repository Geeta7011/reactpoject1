import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav className='navbar'>
      <Link to="/" className='nav'>Home</Link>
      <Link to="about" className='nav'>About</Link>
      <Link to="Contact" className='nav'><Contact></Contact></Link>
      <Link to="product" className='nav'>Product</Link>
    </nav>
    <div className='wrapper'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </div>
     </BrowserRouter>
    </>
  )
}

export default App
