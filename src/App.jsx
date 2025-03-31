import React from 'react'
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import HeroPage from "./pages/HeroPage"
import Footer from './components/Footer'
import RecipeCard from './components/RecipeCard'
import ExploreRecipes from './pages/ExploreRecipes'
import UploadRecipeform from './components/UploadRecipeform'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HeroPage></HeroPage>}></Route>
        <Route path='/explorerecipe' element={<ExploreRecipes></ExploreRecipes>}></Route>
        <Route path='/uploadrecipe' element={<UploadRecipeform></UploadRecipeform>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      </BrowserRouter> 
  
   
    </div>
  )
}

export default App
