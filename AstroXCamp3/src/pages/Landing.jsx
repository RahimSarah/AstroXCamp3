import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Workshops from '../components/Workshops'
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
      <Workshops />
      <Conferences  />
      <Challenge />
      <Agenda />
      <FnQ />
      <Footer />
    </>
  )
}

export default Landing