import React from 'react'
import Footer from './Footer'

const UploadRecipeform = () => {
  return (
    <>

<section className="why-share-recipe text-center py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Why Share Your Recipe?</h2>
        <p className="text-muted">Join our food-loving community and inspire others with your unique recipes.</p>
      </div>
    </section>
    
    <section className="upload-recipe py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Upload Your Recipe</h2>
        <div className="card p-4 shadow-lg border-0">
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Recipe Title</label>
              <input type="text" className="form-control" placeholder="Enter recipe title" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Description</label>
              <textarea className="form-control" rows="3" placeholder="Write a short description..." required></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Ingredients</label>
              <textarea className="form-control" rows="4" placeholder="List ingredients here..." required></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Preparation Steps</label>
              <textarea className="form-control" rows="5" placeholder="Describe preparation steps..." required></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Upload Image</label>
              <input type="file" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit Recipe</button>
          </form>
        </div>
      </div>
    </section>

    <Footer></Footer>

    </>
  )
}

export default UploadRecipeform
