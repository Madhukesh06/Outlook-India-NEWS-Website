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
      <Route exact path="/" element={<App />} />
      <Route exact path="/signup" element={<Signup_page />} />
      <Route exact path="/signin" element={<Login_page />} />
      <Route exact path="/outlook" element={<App key="outlook" category="health" />} />
      <Route exact path="/business" element={<App key="business" category="business" />} />
      <Route exact path="/money" element={<App key="money" category="money" />} />
      <Route exact path="/bitcoin" element={<App key="bitcoin" category="bitcoin" />} />
      <Route exact path="/travel" element={<App key="travel" category="travel" />} />
      <Route exact path="/sports" element={<App key="sports" category="sports" />} />
      <Route exact path="/videos" element={<App key="videos" category="videos" />} />
      <Route exact path="/entertainment" element={<App key="entertainment" category="entertainment" />} />
      <Route exact path="/photo" element={<App key="photo" category="photo" />} />
      <Route exact path="/magazine" element={<App key="magazine" category="science" />} />
      <Route exact path="/hindi" element={<App key="hindi" category="hindi" />} />
      <Route exact path="/others" element={<App key="others" category="others" />} />
      <Route exact path="/agritech" element={<App key="agritech" category="technology" />} />

    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
)
