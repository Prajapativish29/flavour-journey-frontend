import React from 'react'

const Discover = () => {
  return (
      <div className="discover-container">
          <header className="discover-header">
              <h1>Discover New Recipes</h1>
              <p>Explore a world of flavors and find your next favorite dish.</p>
          </header>
          <section className="recipe-grid">
              {[...Array(6)].map((_, index) => (
                  <div className="recipe-card" key={index}>
                      <img src={`https://source.unsplash.com/300x200/?food&sig=${index}`} alt="Recipe" />
                      <div className="recipe-info">
                          <h3>Delicious Recipe {index + 1}</h3>
                          <p>Amazing taste, easy to cook, and full of flavors!</p>
                          <button className="view-recipe">View Recipe</button>
                      </div>
                  </div>
              ))}
          </section>
      </div>
  );
};

export default Discover
