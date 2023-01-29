import React from 'react'
import CoffeeProfile from './CoffeeProfile'


function Hot() {
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
    const [profilefive, setProfileFive] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilesix, setProfileSix] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileseven, setProfileSeven] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileeight, setProfileEight] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilenine, setProfileNine] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileten, setProfileTen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileeleven, setProfileEleven] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profiletwelve, setProfileTwelve] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilethirteen, setProfileThirteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilefourteen, setProfileFourteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilefifteen, setProfileFifteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilesixteen, setProfileSixteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileseventeen, setProfileSeventeen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profileeighteen, setProfileEighteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profilenineteen, setProfileNineteen] = React.useState({
        title:"",
        imageUrl:"",
        description:"",
        ingredients:""
    })
    const [profiletwenty, setProfileTwenty] = React.useState({
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
                          ingredients:response[1].ingredients.join(", ")})
        setProfileThree({...profilethree,
                          title:response[2].title,
                          imageUrl:response[2].image,
                          description:response[2].description,
                          ingredients:response[2].ingredients.join(", ")})
        setProfileFour({...profilefour,
                          title:response[3].title,
                          imageUrl:response[3].image,
                          description:response[3].description,
                          ingredients:response[3].ingredients.join(", ")})
        setProfileFive({...profilefive,
                          title:response[4].title,
                          imageUrl:response[4].image,
                          description:response[4].description,
                          ingredients:response[4].ingredients.join(", ")})
        setProfileSix({...profilesix,
                           title:response[5].title,
                           imageUrl:response[5].image,
                           description:response[5].description,
                           ingredients:response[5].ingredients.join(", ")})
        setProfileSeven({...profileseven,
                           title:response[6].title,
                           imageUrl:response[6].image,
                           description:response[6].description,
                           ingredients:response[6].ingredients.join(", ")})
        setProfileEight({...profileeight,
                           title:response[7].title,
                           imageUrl:response[7].image,
                           description:response[7].description,
                           ingredients:response[7].ingredients.join(", ")})
        setProfileNine({...profilenine,
                            title:response[8].title,
                            imageUrl:response[8].image,
                            description:response[8].description,
                            ingredients:response[8].ingredients.join(", ")})
        setProfileTen({...profileten,
                            title:response[9].title,
                            imageUrl:response[9].image,
                            description:response[9].description,
                            ingredients:response[9].ingredients.join(", ")})
        setProfileEleven({...profileeleven,
                            title:response[10].title,
                            imageUrl:response[10].image,
                            description:response[10].description,
                            ingredients:response[10].ingredients.join(", ")})
        setProfileTwelve({...profiletwelve,
                            title:response[11].title,
                            imageUrl:response[11].image,
                            description:response[11].description,
                            ingredients:response[11].ingredients.join(", ")})
        setProfileThirteen({...profilethirteen,
                            title:response[12].title,
                            imageUrl:response[12].image,
                            description:response[12].description,
                            ingredients:response[12].ingredients.join(", ")})
        setProfileFourteen({...profilefourteen,
                            title:response[13].title,
                            imageUrl:response[13].image,
                            description:response[13].description,
                            ingredients:response[13].ingredients.join(", ")})
        setProfileFifteen({...profilefifteen,
                            title:response[14].title,
                            imageUrl:response[14].image,
                            description:response[14].description,
                            ingredients:response[14].ingredients.join(", ")})
        setProfileSixteen({...profilesixteen,
                            title:response[15].title,
                            imageUrl:response[15].image,
                            description:response[15].description,
                            ingredients:response[15].ingredients.join(", ")})
        setProfileSeventeen({...profileseventeen,
                                title:response[16].title,
                                imageUrl:response[16].image,
                                description:response[16].description,
                                ingredients:response[16].ingredients.join(", ")})
        setProfileEighteen({...profileeighteen,
                                title:response[17].title,
                                imageUrl:response[17].image,
                                description:response[17].description,
                                ingredients:response[17].ingredients.join(", ")})
        setProfileNineteen({...profilenineteen,
                                title:response[18].title,
                                imageUrl:response[18].image,
                                description:response[18].description,
                                ingredients:response[18].ingredients.join(", ")})
        setProfileTwenty({...profileeight,
                             title:response[19].title,
                             imageUrl:response[19].image,
                             description:response[19].description,
                             ingredients:response[19].ingredients.join(", ")})
                            
        })
    .catch(error => console.log(error))



     },
    )


  return (
    <div>
       <h1>Hot Coffee Recipes</h1>
       <div className='Main-container'>
            <CoffeeProfile profile={profileone}/>
            <CoffeeProfile profile={profiletwo}/>
            <CoffeeProfile profile={profilethree} />
            <CoffeeProfile profile={profilefour} />
            <CoffeeProfile profile={profilefive} />
            <CoffeeProfile profile={profilesix} />
            <CoffeeProfile profile={profileseven} />
            <CoffeeProfile profile={profileeight} />
            <CoffeeProfile profile={profilenine} />
            <CoffeeProfile profile={profileten} />
            <CoffeeProfile profile={profileeleven} />
            <CoffeeProfile profile={profiletwelve} />
            <CoffeeProfile profile={profilethirteen} />
            <CoffeeProfile profile={profilefourteen} />
            <CoffeeProfile profile={profilefifteen} />
            <CoffeeProfile profile={profilesixteen} />
            <CoffeeProfile profile={profileseventeen} />
            <CoffeeProfile profile={profileeighteen} />
            <CoffeeProfile profile={profilenineteen} />
            <CoffeeProfile profile={profiletwenty} />

       </div>
    </div>
  )
}

export default Hot