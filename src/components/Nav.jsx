import React from 'react'
import logo from "../images/flavourjourney.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
          <nav class="navbar navbar-expand-lg navbar-scroll">
    <div class="container">
      <h1>Flavour Journey</h1>\
      <button class="navbar-toggler ps-0" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon d-flex justify-content-start align-items-center"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/explorerecipe">Explore Recipes</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/uploadrecipe">Upload Recipe</Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">Contact</a>
          </li> */}
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/login">Login</Link>
          </li>
        </ul>

        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link px-2" href="#!">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ps-2" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Nav
