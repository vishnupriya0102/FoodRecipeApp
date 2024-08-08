// import { Recipe } from './types';
import { useEffect, useState } from 'react';


interface Dosa {
  id: number;
  name: string;
  description: string;
  url: string;
}
    const Dosa:React.FC = () => {
        const [recipes, setRecipes] = useState<Dosa[]>([]);
      
        useEffect(() => {
          const fetchRecipes = async () => {
            const response = await fetch('/api/dosa/sql/get-all');
            const data = await response.json() ;
            setRecipes(data.results);
          };
          
          fetchRecipes();
        }, []);
      
        return (
          <div className='px-32'>
            <h1 className='text-4xl text-green-600 px-5 py-4'>Recipes</h1>
            <ul className='px-12'>
                
              {recipes.map((dosa) => (
                
                <li className='py-4 ' key={dosa.id}>
                    <div className='bg-gray-100 py-3 px-20'>
                    <div className='text-center text-blue-600 text-2xl'>{dosa.name}
                    </div>
                    <div className='flex item-center px-72 py-3'>
                        <img src={dosa.url} alt={dosa.name} className=' w-32 h-32' />
                    </div>
                    <div className='text-center px-32'>
                    {dosa.description}
                    </div>
                    </div>
                    </li>
              ))}
            </ul>
          </div>
        );
      };
      
                

export default Dosa;