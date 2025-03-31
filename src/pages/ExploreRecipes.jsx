import { useState } from "react";
import React from 'react'
import Footer from "../components/Footer";


const ExploreRecipes = () => {



  return (
  <>

{/* <section className="static-content-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Why Share Recipes?</h2>
        <p className="text-center text-muted mb-4">Sharing recipes brings people together, inspires creativity, and helps preserve culinary traditions.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="text-center p-3">
              <h5>Discover New Flavors</h5>
              <p>Explore a diverse range of dishes from around the world.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-3">
              <h5>Share Your Passion</h5>
              <p>Inspire others with your cooking skills and unique recipes.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-3">
              <h5>Build a Community</h5>
              <p>Connect with fellow food enthusiasts and exchange ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    
    {/* <section className="explore-recipes py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4"> Recipes</h2>
        <div className="row">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg p-4 rounded-3 text-center">
                <h5 className="fw-bold"> Recipe {index + 1}</h5>
                <p className="text-muted">A delicious and exciting new dish.</p>
                <button className="btn btn-primary mt-2">View Recipe Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}


    {/* featured recipe section */}

    <section className="container my-5">
      <h2 className="text-center mb-4">Recipes</h2>
      <div className="row g-4">
        {/* Row 1 */}
        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe1.jpg" className="card-img-top" alt="Spaghetti Carbonara" />
            <div className="card-body text-center">
              <h4 className="card-title">Spaghetti Carbonara</h4>
              <p className="card-text">Delicious Italian pasta with creamy sauce.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe2.jpg" className="card-img-top" alt="Chicken Biryani" />
            <div className="card-body text-center">
              <h4 className="card-title">Chicken Biryani</h4>
              <p className="card-text">Spicy and flavorful rice dish from India.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe3.jpg" className="card-img-top" alt="Chocolate Cake" />
            <div className="card-body text-center">
              <h4 className="card-title">Chocolate Cake</h4>
              <p className="card-text">Rich and moist chocolate cake for dessert.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe4.jpg" className="card-img-top" alt="Tacos" />
            <div className="card-body text-center">
              <h4 className="card-title">Tacos</h4>
              <p className="card-text">Mexican delight with fresh toppings.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe5.jpg" className="card-img-top" alt="Sushi" />
            <div className="card-body text-center">
              <h4 className="card-title">Sushi</h4>
              <p className="card-text">Japanese delicacy with fresh seafood.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={{ width: "22rem", height: "28rem" }}>
            <img src="recipe6.jpg" className="card-img-top" alt="Grilled Salmon" />
            <div className="card-body text-center">
              <h4 className="card-title">Grilled Salmon</h4>
              <p className="card-text">Healthy and tasty grilled salmon.</p>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Footer></Footer>

  </>
  )
}

export default ExploreRecipes
