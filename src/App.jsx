import './App.css'
import Login from './Components/Signup_page'
import Navbar from './Components/Navbar'
import Signup_page from './Components/Signup_page'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'

function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Homepage category={props.category} />
      <Footer />
    </div>
  )
}

export default App
