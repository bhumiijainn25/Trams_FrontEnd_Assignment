import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Progress from './components/Progress.jsx'
import Offers from './components/Offers.jsx'
import Testimonial from './components/Testimonial.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <div className="container">
        <Progress />
        <Offers />
        <Testimonial />
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
