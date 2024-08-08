// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Component/Home';
import Recipe from './Component/Recipe';
import About from './Component/About';
import Dosa from './Component/Dosa';
import Idly from './Component/Idly';
import Curdrice from './Component/Curdrice';
import Briyani from './Component/Briyani';
import Vadai from './Component/Vadai';
import Uttapam from './Component/Uttapam';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  const handleSearch = (recipe_name: string) => {
    fetch(`/api/recipe/sql/search?recipe_name=${recipe_name}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.results))
      .catch((error) => console.error(error));
  }

  return (
    <BrowserRouter>
    <header id='root' className="container mx-auto py-4  bg-red-400">
            <div className="flex items-center justify-between">
                <div className="px-3 flex items-center">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXV0ZW5zaWxzIj48cGF0aCBkPSJNMyAydjdjMCAxLjEuOSAyIDIgMmg0YTIgMiAwIDAgMCAyLTJWMiIvPjxwYXRoIGQ9Ik03IDJ2MjAiLz48cGF0aCBkPSJNMjEgMTVWMnYwYTUgNSAwIDAgMC01IDV2NmMwIDEuMS45IDIgMiAyaDNabTAgMHY3Ii8+PC9zdmc+" alt="Logo" className="h-8 mr-2"/>
                    <h1 className="text-xl px-3 font-semibold text-gray-800">Food Recipes</h1>
                </div>
                <div className="App">
      <SearchBar onSearch={handleSearch} />
      
    </div>
    <nav>
        <Link to="/"className="text-gray-800 hover:text-gray-600 px-4">Home</Link>
        <Link to="/about"className="text-gray-800 hover:text-gray-600 px-4">About</Link>
        <Link to="/recipe"className="text-gray-800 hover:text-gray-600 px-4">Recipe</Link>
        

    </nav>
</div>
</header>
<div className="px-44">
    {/* Display the list of recipes here */}
    {recipes.map((recipe) => (
                
                <div className='py-4 ' key={recipe.recipe_id}>
                    <div className='bg-gray-100 py-3 px-6'>
                    <div className='text-center text-blue-600 text-2xl'>{recipe.recipe_name}
                    </div>
                    <div className='p-8'>
                    <div className='flex items-center px-80 py-3'>
                        <img src={recipe.url} alt={recipe.recipe_name} className=' w-32 h-32' />
                    </div>
                    </div>
                    <div className='text-center px-32'>
                    {recipe.description}
                    </div>
                    </div>
                    </div>
              ))}
</div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/recipe' element={<Recipe  />}/> 
      <Route path='/dosa' element={<Dosa  />}/> 
      <Route path='/idly' element={<Idly  />}/> 
      <Route path='/curdrice' element={<Curdrice  />}/>
      <Route path='/briyani' element={<Briyani  />}/> 
      <Route path='/vadai' element={<Vadai  />}/>  
      <Route path='/uttapam' element={<Uttapam  />}/> 
    </Routes>
    </BrowserRouter> 
  );
}
export default App;