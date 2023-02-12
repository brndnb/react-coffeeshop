import React, {useEffect,useState} from 'react'
import "./ColdRecipe.css"
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import axios from 'axios'

function ColdRecipe() {

//UseState
//Set state for recipes pulled from API and store state as an empty array
const [recipes, setNewRecipe] = useState([])



//Pull data from API and place it in the empty state array
//We will use axios to fetch the API data

//Start of useEffect
useEffect(
    ()=>{
        axios.get("https://api.sampleapis.com/coffee/iced")
        .then (response=>{
            setNewRecipe(response.data) //adds the response to state array
        })
        .catch(err => console.log(err))
    },[]
)
//End of useEffect


  return (
    <div className="hot-container">
        <h1 className="hot-banner">Cold Coffee Recipes</h1>
        <div className="recipe-container">
            {
                //Walk through the state array
                //Pass it to RecipeCard through "recipe" props
                recipes.map(item => <RecipeCard recipe={item}/>)

            }
        </div>
    </div>
  )
}

export default ColdRecipe