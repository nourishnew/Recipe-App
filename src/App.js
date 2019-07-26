import React from 'react';
import  { useState, useEffect } from 'react';
import Recipe from './Recipe';

import './App.css';


  const APP_ID='7bbf5aca';
  const APP_KEY='8f9cf07cb6964e07a622f55b8e032b84';
  const App=()=>{
    const examplereq= ``;

  console.log(examplereq);
  const [counter, setCounter]=useState(0);
  const[recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken')



  useEffect(()=>{
    console.log("effect has been run")
    getRecipes();
  },[query])
  //empty array -only once
  //value- run only value changees
  const getRecipes=async ()=>{

    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data=await response.json()
    //formatting response we can use using json method
setRecipes(data.hits);    
console.log(data.hits)
  }

  const updateSearch=e=>{
      setSearch(e.target.value);
      console.log(search);

  }
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search)
    setSearch("")

  }


  return(
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button
          className="search-button" type="submit">search
        </button>
      <h1 onClick ={()=>setCounter(counter+1)}>{counter}</h1>
        
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
        key={'yoyo'}
        title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      
      ))}

      </div>
      

</div>
  

  )
    

  }


export default App;
