import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Row.css"
import { instance } from '../Axios/Axios'
import { imagePrefix } from '../Resources/Constants'

function Row({title, fetchUrl, isLargeRow = false}) {
  
    // The array of movie jsons to display in the row
    const [movieArray, setMovieArray] = useState([])

    // Refs used for the scroll arrows
    const rowRef = useRef()
    const scrolling = useRef()
    const scrollTimeout = useRef()

    useEffect(()=>{
        // Call this function to fetch the data from tmdb api
        fetchMovies()
    },[])

    // Fetch the movie data and put it in the array in state
    async function fetchMovies(){

        // Get the array of movies in from the specified fetch Url
        const result = await instance.get(fetchUrl)        
        console.log(result?.data?.results)

        // If it is what we are looking for put it in state to be displayed
        if(Array.isArray(result?.data?.results))
            setMovieArray(result?.data?.results)
        
    }
  
    // Set the flag and call the function that will repeat    
    function startScrollingRight(){
        scrolling.current = true
        scrollRight()
    }
    // Set the flag and call the function that will repeat    
    function startScrollingLeft(){
        scrolling.current = true
        scrollLeft()
    }
    // Scrolls the row element and calls itself again after a timer
    function scrollLeft(){              
        rowRef.current.scrollTo(rowRef.current.scrollLeft + 5, 0)  
        scrollTimeout.current = setTimeout(() => {
            scrollLeft()
        }, (10));
    }
    // Scrolls the row element and calls itself again after a timer
    function scrollRight(){
        rowRef.current.scrollTo(rowRef.current.scrollLeft - 5, 0)  
        scrollTimeout.current = setTimeout(() => {
            scrollRight()
        }, (10));
    }
    // Sets the flag and stops the timeout
    function stopScroll(){
        clearTimeout(scrollTimeout.current)
        scrolling.current = false
    }

    function logMovieData(_toLog){
        console.log(_toLog)
    }

    return (
        <div className='rowContainer'>
            <div className='rowTitle'>
                {title}
            </div>
            <div onMouseEnter={startScrollingRight} onMouseLeave={stopScroll} className={"scrollArrow left"}>{"<"}</div>            
            <div onMouseEnter={startScrollingLeft} onMouseLeave={stopScroll} className={"scrollArrow right"}>{">"}</div>            
            <div className='row' ref={rowRef}>                
                {movieArray.map(movieData => (
                    <>
                    {movieData.backdrop_path && 
                        <div onClick={()=>logMovieData(movieData)} className={`moviePoster ${isLargeRow && " posterLarge"}`} key={movieData.id}>
                            <div className='movieTitle'>
                                {!isLargeRow && (movieData.title || movieData.original_name)}
                            </div>
                            <img src={isLargeRow ? imagePrefix+movieData.poster_path : imagePrefix+movieData.backdrop_path}></img>
                        </div>
                    }
                    </>
                ))}
                
            </div>
        </div>
    
  )
}

export default Row