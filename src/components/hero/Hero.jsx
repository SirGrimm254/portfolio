import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "../hero/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src="/images/untitled_design-removebg-preview.png" alt="hero pic" />
        </div>
        <div className="text-hero">
          <div className="text-title">
            <p className="p1">I'M</p>
            <p className="p2">Alexander G . M .</p>
          </div>
          <p className="p3">Python, Full Stack Web Developer & Mobile Application</p>
          <button onClick={() => window.open("https://wa.me/254748845075", "_blank")}>
            Contact Me
          </button>
        </div>
        <div className="hero-icons">
          <div className="line"></div>

          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="https://wa.me/2547XXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero