import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    
    <section className="login-section d-flex align-items-center justify-content-center" style={{ height: "100vh", background: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-lg border-0 rounded-3">
              <h2 className="fw-bold text-center mb-4">Login</h2>
              <p className="text-center text-muted">Access your account to explore and share delicious recipes.</p>
              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" required />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <input type="checkbox" id="rememberMe" /> <label htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <a href="#" className="text-primary">Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="text-center mt-3">Don't have an account? <Link to="/register" className="text-primary">Sign Up</Link></p>
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

export default Login
