import React from 'react'
import "../styles/Hero.css"
import RecipeCard from '../components/RecipeCard'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const HeroPage = () => {
  return (
    <>
    {/* header */}
             <section className="hero-section text-center d-flex align-items-center justify-content-center text-white" style={{
      height: "100vh",
      background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1600x900/?food')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="container">
        <h1 className="display-4 fw-bold">Discover, Cook, & Share Delicious Recipes!</h1>
        <p className="lead">Find the perfect recipe, share your favorites, and connect with a community of passionate cooks!</p>
        <div className="mt-4">
          <Link to="/explorerecipe" className="btn btn-primary btn-lg me-3">Explore Recipes</Link>
          <Link to="/uploadrecipe" className="btn btn-outline-light btn-lg">Share Your Recipe</Link>     
          </div>
      </div>
    </section>


  {/* featured recipe section */}

    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Recipes</h2>
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


    {/* how it works section */}

    <section className="how-it-works text-center py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <img src="https://source.unsplash.com/100x100/?search" alt="Discover" className="mx-auto mb-3" />
              <h5>Discover Recipes</h5>
              <p>Thousands of delicious recipes at your fingertips.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <img src="https://source.unsplash.com/100x100/?upload" alt="Share" className="mx-auto mb-3" />
              <h5>Share Your Creations</h5>
              <p>Upload your own recipes and inspire others.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <img src="https://source.unsplash.com/100x100/?community" alt="Enjoy" className="mx-auto mb-3" />
              <h5>Enjoy & Connect</h5>
              <p>Join a community of food lovers & explore flavors together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* top categories */}

    <section className="top-categories text-center py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Top Categories</h2>
        <div className="row">
          {[
            { name: "Breakfast", img: "https://source.unsplash.com/200x200/?breakfast" },
            { name: "Lunch", img: "https://source.unsplash.com/200x200/?lunch" },
            { name: "Dinner", img: "https://source.unsplash.com/200x200/?dinner" },
            { name: "Desserts", img: "https://source.unsplash.com/200x200/?dessert" },
            { name: "Drinks", img: "https://source.unsplash.com/200x200/?drinks" },
            { name: "Snacks", img: "https://source.unsplash.com/200x200/?snacks" }
          ].map((category, index) => (
            <div key={index} className="col-md-4 col-lg-2 mb-4">
              <div className="card border-0 shadow-lg p-3 rounded-3">
                <img src={category.img} alt={category.name} className="card-img-top rounded-circle" />
                <h5 className="mt-3 fw-bold">{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer></Footer>
    </>
  )
}

export default HeroPage
