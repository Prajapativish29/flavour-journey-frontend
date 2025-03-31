import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <>
    
    <section className="register-section d-flex align-items-center justify-content-center" style={{ height: "100vh", background: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-lg border-0 rounded-3">
              <h2 className="fw-bold text-center mb-4">Sign Up</h2>
              <p className="text-center text-muted">Join our community and start sharing your favorite recipes!</p>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Create a password" required />
                </div>
                <button type="submit" className="btn btn-success w-100">Sign Up</button>
                <p className="text-center mt-3">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-12">
            <h5 className="text-muted">Join our community of food lovers!</h5>
            <p>Explore new recipes, share your own, and connect with fellow cooking enthusiasts.</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Register
