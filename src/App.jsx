import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Components/Signup_page'
import Navbar from './Components/Navbar'
import Signup_page from './Components/Signup_page'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup_page />

    </div>
  )
}

export default App
