
import './Technologies.css'

const tracks = [
  {
    number: '01',
    icon: 'AI',
    title: 'DATA SCIENCE & AI',
    description:
      'Turn raw data into useful insights with Python, visualization, and machine learning.',
    application:
      'Predict whether a habitat can support plant growth.',
    mentor: '[MENTOR NAME]',
    color: 'pink'
  },
  {
    number: '02',
    icon: '</>',
    title: 'WEB DEVELOPMENT',
    description:
      'Explore HTML, CSS, and JavaScript to make complex information accessible.',
    application:
      'Create a dashboard for monitoring a space habitat.',
    mentor: '[MENTOR NAME]',
    color: 'blue'
  },
  {
    number: '03',
    icon: '0101',
    title: 'ARDUINO & EMBEDDED',
    description:
      'Discover microcontrollers, sensors, circuits, and responsive hardware.',
    application:
      'Monitor temperature, humidity, and soil in a space greenhouse.',
    mentor: '[MENTOR NAME]',
    color: 'yellow'
  },
  {
    number: '04',
    icon: 'UX',
    title: 'UI/UX DESIGN',
    description:
      'Learn user research, wireframes, visual hierarchy, and prototyping.',
    application:
      'Design an interface astronauts could use to manage their habitat.',
    mentor: '[MENTOR NAME]',
    color: 'purple'
  }
]

function Technologies() {
  return (
    <section className="technologies" id="workshops">

      <div className="technologies-header">
        <div className="technologies-title">
          <h2>
            Find your field.
            <br />
            <span>Build your skills.</span>
          </h2>
        </div>

        <div className="technologies-intro">
          <p>
            Explore technology through practical workshops led by
            experienced mentors. Choose your track and learn by doing.
          </p>
        </div>
      </div>

      <div className="tracks-container">
        {tracks.map((track) => (
          <article
            className={`track-card ${track.color}`}
            key={track.number}
          >
            <div className="track-top">
              <span className="track-number">
                TRACK {track.number}
              </span>

              <span className="track-icon">
                {track.icon}
              </span>
            </div>

            <div className="track-content">
              <h3>{track.title}</h3>

              <p className="track-description">
                {track.description}
              </p>
            </div>

            <div className="track-application">
              <span>SPACE APPLICATION</span>
              <p>{track.application}</p>
            </div>

            <div className="track-mentor">
              <div className="mentor-avatar">?</div>

              <div>
                <span>YOUR MENTOR</span>
                <p>{track.mentor}</p>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}

export default Technologies
