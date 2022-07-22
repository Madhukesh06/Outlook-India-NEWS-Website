import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Components/Navbar'
import Signup_page from './Components/Signup_page'
import Login_page from './Components/Login_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/signup" element={<Signup_page />} />
      <Route path="/signin" element={<Login_page />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
)
