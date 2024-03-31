// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import ProductList from "./components/ProductList";
import { WarehouseProvider } from "./contexts/WarehouseContext";
import WarehouseList from "./components/WarehouseList";
import InventoryList from "./components/InventoryList";

import './App.css'

function App() {

  return (
    <WarehouseProvider>
      <div>
        <WarehouseList />
        <InventoryList />
      </div>
    </WarehouseProvider>
  )
}

export default App
