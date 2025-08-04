import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Saas from './Components/Saas'
import Products from './Components/Products'
import Daas from './Components/Daas'
import Contact from './Components/Contact'
import FooterComponent from './Components/FooterComponent'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/saas" element={<Saas />} />
          <Route path="/products" element={<Products />} />
          <Route path="/daas" element={<Daas />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  )
}

export default App
