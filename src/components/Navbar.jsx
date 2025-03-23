import React, {useState} from 'react'
import "./Navbarstyle.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="https://img.icons8.com/emoji/48/000000/fire.png" alt="fire" />
            Flavor Journey
          </a>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </div>
        </div>
      </nav>
    );
  };

export default Navbar
