import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBakes from './components/FeaturedBakes'
import About from './components/About'
import Philosophy from './components/Philosophy'
import SignatureSpecials from './components/SignatureSpecials'
import Testimonials from './components/Testimonials'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar />
      <Hero />
      <FeaturedBakes />
      <About />
      <Philosophy />
      <SignatureSpecials />
      <Testimonials />
      <VisitUs />
      <Footer />
    </motion.div>
  )
}

export default App

