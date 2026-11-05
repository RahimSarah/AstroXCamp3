import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Conferences from '../components/Conferences'
import Challenge from '../components/Challenge'
import Agenda from '../components/Agenda'
import FnQ from '../components/F&Q'
function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
       <About />
      <Technologies />
      <Conferences />
      <Challenge />
      <Agenda />
      <FnQ />
      <Footer />
      
    </>
  )
}

export default Landing