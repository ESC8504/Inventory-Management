// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
// import ProductList from "./components/ProductList";
import { WarehouseProvider } from "./contexts/WarehouseContext";
import DashPage from "./pages/DashPage";
import WarehousePage from "./pages/WarehousePage";
import CategoryPage from "./pages/CategoryPage";

import './App.css'

function App() {

  return (
    <WarehouseProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/selection" element={<WarehouseSelectionPage />} /> */}
          <Route path="/dash" element={<DashPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </WarehouseProvider>
  )
}

export default App
