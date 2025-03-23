import React from 'react'
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home-container">
    {/* Hero Section */}
    <header className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Flavor Journey</h1>
        <p>Discover and share amazing recipes from around the world!</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </header>

    {/* Trending Recipes */}
    <section className="trending-section">
      <h2>Trending Recipes</h2>
      <div className="recipe-cards">
        <div className="recipe-card">
          <img src="https://via.placeholder.com/300" alt="Recipe 1" />
          <h3>Delicious Pasta</h3>
          <p>A mouth-watering recipe for pasta lovers.</p>
        </div>
        <div className="recipe-card">
          <img src="https://via.placeholder.com/300" alt="Recipe 2" />
          <h3>Spicy Chicken</h3>
          <p>A spicy delight for non-veg lovers.</p>
        </div>
        <div className="recipe-card">
          <img src="https://via.placeholder.com/300" alt="Recipe 3" />
          <h3>Healthy Salad</h3>
          <p>A refreshing and healthy choice.</p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home
