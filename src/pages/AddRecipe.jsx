import React from 'react'

const AddRecipe = () => {
  return (
    <div className="container mt-5" style={{"padding-top": "50px"}}>
      <h2 className="text-center mb-4">Share Your Recipe</h2>
      <p className="text-center text-muted">
        Fill in the details below to add your delicious recipe to our collection.
      </p>
      
      <form className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input type="text" className="form-control" placeholder="Enter recipe name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea className="form-control" rows="3" placeholder="List all ingredients"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea className="form-control" rows="4" placeholder="Write the step-by-step instructions"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload an Image</label>
          <input type="file" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Preparation Time (in minutes)</label>
          <input type="number" className="form-control" placeholder="e.g., 30" />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Vegan</option>
            <option>Dessert</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe
