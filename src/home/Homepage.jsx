import Header from "../components/header/Header.jsx"
import Hero from "../components/hero/Hero.jsx";
import About from "../components/about/About.jsx";
import "../home/Homepage.css"

function Homepage() {
  return (
    <div id="home" className="homepage">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default Homepage;