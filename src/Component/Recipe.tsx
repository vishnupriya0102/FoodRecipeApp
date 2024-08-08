// import { Recipe } from './types';
import { useEffect, useState } from 'react';

interface Recipe {
  recipe_id: number;
  recipe_name: string;
  description: string;
  url : string;
  // add other properties of the Recipe object here
}
interface image{
    id : number;
    url: string;
}
    const Recipe:React.FC = () => {
        const [recipes, setRecipes] = useState<Recipe[]>([]);
        const [Image, setImage] = useState<image[]>([]);
      
        useEffect(() => {
          const fetchRecipes = async () => {
            const response = await fetch('/api/recipe/sql/get-all');
            const data = await response.json() ;
            setRecipes(data.results);
          };
          
          const fetchImage = async () =>{
            const response = await fetch('/api/recipe/image/sql/get-all');
            const data = await response.json() ;
            setImage(data.results);
          }
          
          fetchImage();
          fetchRecipes();
        }, []);
      
        return (
          <div className='px-32'>
            <h1 className='text-4xl text-green-600 px-5 py-4'>Favorites</h1>
            <ul className='px-12'>
                
            {Image.map(image =>(
                    <li key={image.id}>
                        <img src={image.url} alt={image.url}/>
                    </li>
                ))}
              {recipes.map((recipe) => (
                
                <li className='py-4 ' key={recipe.recipe_id}>
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
                    </li>
              ))}
            </ul>
          </div>
        );
      };
      
                

export default Recipe;