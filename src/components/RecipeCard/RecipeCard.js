import React, { useState, useEffect } from 'react'
import "./RecipeCard.css"

//{recipe} is passed as a prop from HotRecipe page

function RecipeCard({recipe}) {

  return (
    <div className="card-container">
        <div className="center">
            <h3>{recipe.title}</h3>
            <img className="card-image" src={recipe.image} alt={recipe.title}></img>
        </div>
        <p>{recipe.description}</p>
        <p className="ingredients"><strong>Ingredients:</strong></p>

        <ul>
            
            {recipe.ingredients.map((ingredient, index) => (  //map ingredients array and display it as a list
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>
  )
}

export default RecipeCard