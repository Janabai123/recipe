import { useEffect,useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import recipeimg from '../src/Image/recipeimg.jpg'


function App() {
const[recipes,setRecipes]=useState([]);
const[search ,setSearch]=useState("coffee");
const[query,setQuery]=useState('coffee');

  const API_ID="a55b85f7";
    const API_KEY="74ae2bfa91ab16cc5879f375a154efc1"	;

   
useEffect(()=>{
  getRecipes();
},[query])

const getRecipes=async ()=>{
  try{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
const data= await response.json();
console.log(data.hits);
setRecipes(data.hits);

}
catch(err){
  console.log(err);
  setRecipes(err)
}
}

const updateSearch=(e)=>{
setSearch(e.target.value);
console.log(search)
}

const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search);
  setSearch('')
}

  return (
   <div className='App'>
   
    <div>
    <img src={recipeimg}  className ='img'/>
      <h1 >Recipes</h1>
      <form  className='search-form' onSubmit={getSearch}>
   
      <input type="text" className='searchbar' placeholder='Search Recipe..' value={search} onChange={updateSearch}></input>
      <button className="search-button" type='submit'>Search</button>
    </form>
    </div>

{!query ? (<h1>Recipe Not Found..!!!</h1>) :(<div className='recipes'>
  {recipes.map(recipe=>(
    <Recipe
    key={recipe.recipe.label}  
    title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      images={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
    />
  )
  )}
  </div>

)}

   </div>
  );
}

export default App;
