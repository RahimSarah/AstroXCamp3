
import { Link } from 'react-router-dom'
import heroBackground from '../assets/bghero.png'
import './Hero.css'

function Hero({ onRegister }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >

      <div className="hero-content">

        <p className="hero-tagline">
          EXPLORE THE FUTURE OF HUMANITY
        </p>

        <h1 className="font-title">
          What if we could
          <br />
          live <span>beyond Earth?</span>
        </h1>

        <p className="hero-description">
          Discover the technologies and ideas that could
          make life beyond our planet possible.
        </p>

        <div className="hero-buttons">

          <button onClick={onRegister} className="hero-btn primary-btn">
            Register Now
          </button>

          <a href="#workshops" className="hero-btn secondary-btn">
            Discover the Event
          </a>

        </div>

        <div className="hero-event-info">
          <span>ASTROXCAMP</span>
          <span>•</span>
          <span>EXPLORE. INNOVATE. DISCOVER.</span>
        </div>

      </div>

    </section>
  )
}

export default Hero
