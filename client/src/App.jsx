// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
// import ProductList from "./components/ProductList";
import { WarehouseProvider } from "./contexts/WarehouseContext";
import WarehouseList from "./components/WarehouseList";
import InventoryList from "./components/InventoryList";
import WarehouseSelectionPage from "./pages/WarehouseSelectionPage";
import DashPage from "./pages/DashPage";

import './App.css'

function App() {

  return (
    <WarehouseProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/selection" element={<WarehouseSelectionPage />} /> */}
          <Route path="/dash" element={<DashPage />} />
        </Routes>
      </BrowserRouter>
    </WarehouseProvider>
  )
}

export default App
