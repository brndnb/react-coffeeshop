import React from 'react'

function CoffeeProfile(props) {
  return (
    <div>
        <article className='Main-box'>
            <h2>{props.profile.title}</h2>
            <img src={props.profile.imageUrl} className="profile-image"></img>
            <p>{props.profile.description}</p>
            <h2>Ingredients:</h2>
            <p>{props.profile.ingredients}</p>
        </article>
    </div>
  )
}

export default CoffeeProfile