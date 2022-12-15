import React, { useEffect, useState } from 'react'
import "../Styles/Banner.css"
import { instance } from '../Axios/Axios'
import { requetsUrls, imagePrefix } from '../Resources/Constants'

function Banner() {
  
    const bannerImageUrl = "https://i.pinimg.com/originals/26/ef/5a/26ef5aebb8ae9aec3b8c4c3eba940d0f.gif"
    
    const [movieData, setMovideData] = useState({})

    useEffect(()=>{
        fetchBannerMovie()
    }, [])

    async function fetchBannerMovie(){

        // Get an array of netflix original movies 
        const result = await instance.get(requetsUrls.topRated)
        const bannerMovies = result?.data?.results

        // If we did get an array of movies coose one randomly
        if(Array.isArray(bannerMovies)){            
            const bannerMovieData = bannerMovies[Math.floor(Math.random() * bannerMovies.length)]        
            // Put that data in state to be displayed
            setMovideData(bannerMovieData)
        }
    }
    

    return (
        <div className='banner' style={{
            backgroundImage: `url(${imagePrefix + movieData?.backdrop_path})`,
            backgrounImage: `url(${bannerImageUrl})`,                                    
        }}>            
            <div className='bannerContents'>
                <h1 className='bannerTitle'>{movieData?.title}</h1>
                <div className='bannerButtons'>
                    <button>Watch Now</button>
                    <button>View Info</button>
                </div>
                <h1 className='bannerDescription'>
                    {movieData?.overview}
                </h1>
                
            </div>
            <div className='bannerFade'></div>
        </div>
    )
}

export default Banner