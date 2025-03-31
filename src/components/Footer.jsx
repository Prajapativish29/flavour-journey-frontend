import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-white text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p className="text-muted">A platform to explore and share amazing recipes from around the world.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <a href="#home" className="d-block text-white">Home</a>
            <a href="#recipes" className="d-block text-white">Recipes</a>
            <a href="#share" className="d-block text-white">Share Recipe</a>
            <a href="#contact" className="d-block text-white">Contact</a>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
            <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
            <a href="#" className="text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
        <hr className="border-light" />
        <p className="mt-3">&copy; {new Date().getFullYear()} Recipe Sharing Platform. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
