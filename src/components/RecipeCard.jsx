import React from 'react'

const RecipeCard = () => {
  return (
   <>
   
   <section className="view-recipe-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Spaghetti Carbonara</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" alt="Recipe" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h4>Ingredients</h4>
            <textarea className="form-control mb-3" rows="5" readOnly>
              - 200g spaghetti\n- 100g pancetta\n- 2 eggs\n- 50g parmesan cheese\n- Salt & black pepper to taste
            </textarea>
            <h4>Instructions</h4>
            <p>
              Cook spaghetti until al dente. In a pan, fry pancetta until crispy. In a bowl, whisk eggs and cheese together. Mix pasta with pancetta and remove from heat. Stir in the egg mixture quickly to create a creamy sauce. Serve with black pepper and extra cheese.
            </p>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default RecipeCard
