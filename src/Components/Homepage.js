import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Nav from './Nav'
import {instance} from "../Axios/Axios"
import Row from './Row'
import { requetsUrls } from '../Resources/Constants'

function Homepage() {

  return (
    <div>
        <Nav></Nav>
        <Banner></Banner>        
        <Row title="Top Rated" fetchUrl={requetsUrls.topRated} isLargeRow={true}></Row>             
        <Row title="Trending" fetchUrl={requetsUrls.trending}></Row>        
        <Row title="Comedy" fetchUrl={requetsUrls.comedy}></Row>     
        <Row title="Documentaries" fetchUrl={requetsUrls.documentaries }></Row>        
        <Row title="Horrer" fetchUrl={requetsUrls.horrer }></Row>        
        <Row title="Netflix Originals" fetchUrl={requetsUrls.netflixOriginals }></Row>        
        <Row title="Romance" fetchUrl={requetsUrls.romance }></Row>        
    </div>
  )
}

export default Homepage