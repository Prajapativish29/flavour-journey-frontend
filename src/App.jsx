import React from 'react'
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Discover from './pages/Discover'
import AddRecipe from './pages/AddRecipe'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/discover' element={<Discover></Discover>}></Route>
        <Route path='/add-recipe' element={<AddRecipe></AddRecipe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
