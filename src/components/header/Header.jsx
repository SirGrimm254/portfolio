import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons"
import "../header/Header.css"

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        setShowHeader(true);
        return
      }

      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        if (currentScrollY > lastScrollY.current) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      }

      if (currentScrollY < 10) {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
 }, [isMenuOpen]);


  return (
    <section className={`header ${showHeader ? "show" : "hide"}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo1-removebg-preview.png" />
        </div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setIsMenuOpen(false);
              }}>
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setIsMenuOpen(false);
              }}>
                About
              </a>
            </li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="search-btn">
          <input 
            type="search"
            placeholder="Search..."
          />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
    </section>
  )
}

export default Header;