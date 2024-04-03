// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
// import ProductList from "./components/ProductList";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { WarehouseProvider } from "./contexts/WarehouseContext";
import DashPage from "./pages/DashPage";
import WarehousePage from "./pages/WarehousePage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import NavBar from "./utils/NavBar";
import theme from './theme';

import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WarehouseProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <Route path="/selection" element={<WarehouseSelectionPage />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/dash" element={<DashPage />} />
            <Route path="/warehouse" element={<WarehousePage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </WarehouseProvider>
    </ThemeProvider>
  )
}

export default App
