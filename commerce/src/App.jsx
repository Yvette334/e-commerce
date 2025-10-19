import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Product from './Product.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Product/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
