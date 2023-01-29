import React from 'react'
import CoffeeProfile from './CoffeeProfile'

function Main() {
    //Create States for Coffee Profiles

    const [profileone, setProfileOne] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profiletwo, setProfileTwo] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilethree, setProfileThree] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilefour, setProfileFour] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })


    //Use Effect

    React.useEffect(

    () => {

    //API fetch call

    fetch("https://api.sampleapis.com/coffee/hot")
    .then(response => response.json())
    .then (response => {

    
        //Save data to state
        setProfileOne({...profileone,                
                          title:response[0].title,
                          imageUrl:response[0].image,
                          description:response[0].description,
                          ingredients:response[0].ingredients})
        setProfileTwo({...profiletwo,
                          title:response[1].title,
                          imageUrl:response[1].image,
                          description:response[1].description,
                          ingredients:response[1].ingredients})
        setProfileThree({...profilethree,
                          title:response[2].title,
                          imageUrl:response[2].image,
                          description:response[2].description,
                          ingredients:response[2].ingredients})
        setProfileFour({...profilefour,
                          title:response[3].title,
                          imageUrl:response[3].image,
                          description:response[3].description,
                          ingredients:response[3].ingredients})
        })
    .catch(error => console.log(error))



     },
    )


  return (
    <div className='Main-container'>
       <CoffeeProfile profile={profileone}/>
       <CoffeeProfile profile={profiletwo}/>
       <CoffeeProfile profile={profilethree} />
       <CoffeeProfile profile={profilefour} />
    </div>
  )
}

export default Main