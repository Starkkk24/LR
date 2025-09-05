import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Nav from './components/nav'
import Home from './Pages/Home'
import Product_Card from './components/product_card'
// import './App.css'

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </>

  )
}

export default App
