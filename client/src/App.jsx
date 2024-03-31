// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  )
}

export default App
