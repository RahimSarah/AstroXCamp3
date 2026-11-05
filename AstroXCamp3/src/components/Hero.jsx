
import { Link } from 'react-router-dom'
import heroBackground from '../assets/hero-background.png'
import './Hero.css'

function Hero() {
  return (
    <section
  className="hero"
  style={{ backgroundImage: `url(${heroBackground})` }}
>

      <div className="hero-content">

        <p className="hero-tagline">
          EXPLORE THE FUTURE OF HUMANITY
        </p>

        <h1>
          What if we could
          <br />
          live <span>beyond Earth?</span>
        </h1>

        <p className="hero-description">
          Discover the technologies and ideas that could
          make life beyond our planet possible.
        </p>

        <div className="hero-buttons">

          <Link to="/form" className="hero-btn primary-btn">
            Register Now
          </Link>

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
