import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { WarehouseProvider } from "./contexts/WarehouseContext";
import DashPage from "./pages/DashPage";
import WarehousePage from "./pages/WarehousePage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoAccessPage from "./pages/NoAccessPage";
import NavBar from "./utils/NavBar";
import theme from './theme';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import './App.css'

function App() {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = auth.onAuthStateChanged(user => {
        if (user) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    });
    // to unmount here
    return checkLoginStatus;
}, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WarehouseProvider>
        <BrowserRouter>
          <NavBar />
          {isLogged ?
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/dash" element={<DashPage />} />
              <Route path="/warehouse" element={<WarehousePage />} />
              <Route path="/category" element={<CategoryPage />} />
            </Routes>
          : <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/*" element={<NoAccessPage />} />
            </Routes>
          }
        </BrowserRouter>
      </WarehouseProvider>
    </ThemeProvider>
  )
}

export default App
